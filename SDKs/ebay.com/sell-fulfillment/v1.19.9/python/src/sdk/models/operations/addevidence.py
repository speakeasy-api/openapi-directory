import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import addevidencepaymentdisputerequest as shared_addevidencepaymentdisputerequest
from ..shared import addevidencepaymentdisputeresponse as shared_addevidencepaymentdisputeresponse


ADD_EVIDENCE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclasses.dataclass
class AddEvidencePathParams:
    payment_dispute_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddEvidenceSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddEvidenceRequest:
    path_params: AddEvidencePathParams = dataclasses.field()
    security: AddEvidenceSecurity = dataclasses.field()
    request: Optional[shared_addevidencepaymentdisputerequest.AddEvidencePaymentDisputeRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddEvidenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_evidence_payment_dispute_response: Optional[shared_addevidencepaymentdisputeresponse.AddEvidencePaymentDisputeResponse] = dataclasses.field(default=None)
    
