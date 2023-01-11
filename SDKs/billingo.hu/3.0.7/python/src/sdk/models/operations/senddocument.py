import dataclasses
from typing import Optional
from ..shared import senddocument as shared_senddocument
from ..shared import clienterrorresponse as shared_clienterrorresponse
from ..shared import servererrorresponse as shared_servererrorresponse
from ..shared import validationerrorresponse as shared_validationerrorresponse


@dataclasses.dataclass
class SendDocumentPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SendDocumentRequest:
    path_params: SendDocumentPathParams = dataclasses.field()
    request: Optional[shared_senddocument.SendDocument] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendDocumentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    client_error_response: Optional[shared_clienterrorresponse.ClientErrorResponse] = dataclasses.field(default=None)
    send_document: Optional[shared_senddocument.SendDocument] = dataclasses.field(default=None)
    server_error_response: Optional[shared_servererrorresponse.ServerErrorResponse] = dataclasses.field(default=None)
    validation_error_response: Optional[shared_validationerrorresponse.ValidationErrorResponse] = dataclasses.field(default=None)
    
