import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import lineitemtransaction as shared_lineitemtransaction


@dataclasses.dataclass
class TransactionsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TransactionsReadQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    line_item: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'line_item', 'style': 'form', 'explode': True }})
    posted_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'posted_date', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TransactionsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TransactionsReadRequest:
    path_params: TransactionsReadPathParams = dataclasses.field()
    query_params: TransactionsReadQueryParams = dataclasses.field()
    security: TransactionsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TransactionsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    line_item_transaction: Optional[shared_lineitemtransaction.LineItemTransaction] = dataclasses.field(default=None)
    
