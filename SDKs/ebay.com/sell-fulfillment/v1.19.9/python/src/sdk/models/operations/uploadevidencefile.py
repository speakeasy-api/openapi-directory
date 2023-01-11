import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import fileevidence as shared_fileevidence


UPLOAD_EVIDENCE_FILE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclasses.dataclass
class UploadEvidenceFilePathParams:
    payment_dispute_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UploadEvidenceFileSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UploadEvidenceFileRequest:
    path_params: UploadEvidenceFilePathParams = dataclasses.field()
    security: UploadEvidenceFileSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UploadEvidenceFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_evidence: Optional[shared_fileevidence.FileEvidence] = dataclasses.field(default=None)
    
