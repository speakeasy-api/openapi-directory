import dataclasses
from typing import Optional
from ..shared import clienterrorresponse as shared_clienterrorresponse
from ..shared import document as shared_document
from ..shared import servererrorresponse as shared_servererrorresponse
from ..shared import validationerrorresponse as shared_validationerrorresponse


@dataclasses.dataclass
class GetDocumentPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDocumentRequest:
    path_params: GetDocumentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDocumentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    client_error_response: Optional[shared_clienterrorresponse.ClientErrorResponse] = dataclasses.field(default=None)
    document: Optional[shared_document.Document] = dataclasses.field(default=None)
    server_error_response: Optional[shared_servererrorresponse.ServerErrorResponse] = dataclasses.field(default=None)
    validation_error_response: Optional[shared_validationerrorresponse.ValidationErrorResponse] = dataclasses.field(default=None)
    
