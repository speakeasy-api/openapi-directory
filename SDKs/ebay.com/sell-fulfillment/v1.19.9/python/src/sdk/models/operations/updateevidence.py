import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import updateevidencepaymentdisputerequest as shared_updateevidencepaymentdisputerequest


UPDATE_EVIDENCE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclasses.dataclass
class UpdateEvidencePathParams:
    payment_dispute_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateEvidenceSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateEvidenceRequest:
    path_params: UpdateEvidencePathParams = dataclasses.field()
    security: UpdateEvidenceSecurity = dataclasses.field()
    request: Optional[shared_updateevidencepaymentdisputerequest.UpdateEvidencePaymentDisputeRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateEvidenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
