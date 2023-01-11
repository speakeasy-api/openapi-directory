import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import reportmetadata as shared_reportmetadata


@dataclasses.dataclass
class GetReportMetadataForReportTypePathParams:
    report_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'report_type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReportMetadataForReportTypeSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetReportMetadataForReportTypeRequest:
    path_params: GetReportMetadataForReportTypePathParams = dataclasses.field()
    security: GetReportMetadataForReportTypeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetReportMetadataForReportTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    report_metadata: Optional[shared_reportmetadata.ReportMetadata] = dataclasses.field(default=None)
    
