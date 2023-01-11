import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import issuerefundrequest as shared_issuerefundrequest
from ..shared import refund as shared_refund


@dataclasses.dataclass
class IssueRefundPathParams:
    order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssueRefundSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class IssueRefundRequest:
    path_params: IssueRefundPathParams = dataclasses.field()
    security: IssueRefundSecurity = dataclasses.field()
    request: Optional[shared_issuerefundrequest.IssueRefundRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IssueRefundResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    refund: Optional[shared_refund.Refund] = dataclasses.field(default=None)
    
