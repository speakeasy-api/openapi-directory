import dataclasses
from typing import Optional
from ..shared import clienterror as shared_clienterror
from ..shared import clienterrorresponse as shared_clienterrorresponse
from ..shared import servererrorresponse as shared_servererrorresponse
from ..shared import validationerrorresponse as shared_validationerrorresponse


@dataclasses.dataclass
class DownloadDocumentPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadDocumentRequest:
    path_params: DownloadDocumentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DownloadDocumentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    client_error: Optional[shared_clienterror.ClientError] = dataclasses.field(default=None)
    client_error_response: Optional[shared_clienterrorresponse.ClientErrorResponse] = dataclasses.field(default=None)
    download_document_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    server_error_response: Optional[shared_servererrorresponse.ServerErrorResponse] = dataclasses.field(default=None)
    validation_error_response: Optional[shared_validationerrorresponse.ValidationErrorResponse] = dataclasses.field(default=None)
    
