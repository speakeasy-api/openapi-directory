import dataclasses
from typing import Optional
from ..shared import security as shared_security


FETCH_EVIDENCE_CONTENT_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclasses.dataclass
class FetchEvidenceContentPathParams:
    payment_dispute_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchEvidenceContentQueryParams:
    evidence_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'evidence_id', 'style': 'form', 'explode': True }})
    file_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'file_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchEvidenceContentSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FetchEvidenceContentRequest:
    path_params: FetchEvidenceContentPathParams = dataclasses.field()
    query_params: FetchEvidenceContentQueryParams = dataclasses.field()
    security: FetchEvidenceContentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchEvidenceContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
