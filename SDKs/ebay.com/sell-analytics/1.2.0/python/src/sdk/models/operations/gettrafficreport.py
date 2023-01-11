import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import report as shared_report


@dataclasses.dataclass
class GetTrafficReportQueryParams:
    dimension: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dimension', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    metric: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'metric', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTrafficReportSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetTrafficReportRequest:
    query_params: GetTrafficReportQueryParams = dataclasses.field()
    security: GetTrafficReportSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTrafficReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    report: Optional[shared_report.Report] = dataclasses.field(default=None)
    
