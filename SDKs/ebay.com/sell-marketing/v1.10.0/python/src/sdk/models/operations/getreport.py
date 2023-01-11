import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetReportPathParams:
    report_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'report_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReportSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetReportRequest:
    path_params: GetReportPathParams = dataclasses.field()
    security: GetReportSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
