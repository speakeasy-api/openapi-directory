import dataclasses
from typing import Optional
from ..shared import defaultpayload as shared_defaultpayload
from ..shared import sitemapsreport as shared_sitemapsreport


@dataclasses.dataclass
class GetSitemapsReportPathParams:
    analysis_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_slug', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSitemapsReportRequest:
    path_params: GetSitemapsReportPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSitemapsReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    sitemaps_report: Optional[shared_sitemapsreport.SitemapsReport] = dataclasses.field(default=None)
    
