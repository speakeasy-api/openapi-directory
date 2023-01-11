import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import reportmetadatas as shared_reportmetadatas


@dataclasses.dataclass
class GetReportMetadataSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetReportMetadataRequest:
    security: GetReportMetadataSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetReportMetadataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    report_metadatas: Optional[shared_reportmetadatas.ReportMetadatas] = dataclasses.field(default=None)
    
