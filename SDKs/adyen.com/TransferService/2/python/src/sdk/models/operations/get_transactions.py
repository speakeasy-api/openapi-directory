import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTransactionsQueryParams:
    account_holder_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountHolderId', 'style': 'form', 'explode': True }})
    balance_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'balanceAccountId', 'style': 'form', 'explode': True }})
    balance_platform: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'balancePlatform', 'style': 'form', 'explode': True }})
    created_since: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdSince', 'style': 'form', 'explode': True }})
    created_until: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdUntil', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTransactionsSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTransactionsRequest:
    query_params: GetTransactionsQueryParams = dataclasses.field()
    security: GetTransactionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rest_service_error: Optional[Any] = dataclasses.field(default=None)
    transaction_search_response: Optional[Any] = dataclasses.field(default=None)
    
