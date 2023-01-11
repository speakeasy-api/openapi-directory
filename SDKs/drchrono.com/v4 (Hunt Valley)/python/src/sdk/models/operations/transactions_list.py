import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import lineitemtransaction as shared_lineitemtransaction


@dataclasses.dataclass
class TransactionsListQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    line_item: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'line_item', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    posted_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'posted_date', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TransactionsListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionsList200ApplicationJSON:
    r"""TransactionsList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_lineitemtransaction.LineItemTransaction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class TransactionsListRequest:
    query_params: TransactionsListQueryParams = dataclasses.field()
    security: TransactionsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TransactionsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    transactions_list_200_application_json_object: Optional[TransactionsList200ApplicationJSON] = dataclasses.field(default=None)
    
