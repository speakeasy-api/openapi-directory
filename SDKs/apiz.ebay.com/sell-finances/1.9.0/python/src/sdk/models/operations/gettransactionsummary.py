import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import transactionsummaryresponse as shared_transactionsummaryresponse


@dataclasses.dataclass
class GetTransactionSummaryQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTransactionSummarySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetTransactionSummaryRequest:
    query_params: GetTransactionSummaryQueryParams = dataclasses.field()
    security: GetTransactionSummarySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    transaction_summary_response: Optional[shared_transactionsummaryresponse.TransactionSummaryResponse] = dataclasses.field(default=None)
    
