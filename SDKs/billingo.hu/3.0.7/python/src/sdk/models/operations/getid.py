import dataclasses
from typing import Optional
from ..shared import clienterrorresponse as shared_clienterrorresponse
from ..shared import id as shared_id
from ..shared import servererrorresponse as shared_servererrorresponse
from ..shared import validationerrorresponse as shared_validationerrorresponse


@dataclasses.dataclass
class GetIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIDRequest:
    path_params: GetIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    client_error_response: Optional[shared_clienterrorresponse.ClientErrorResponse] = dataclasses.field(default=None)
    id: Optional[shared_id.ID] = dataclasses.field(default=None)
    server_error_response: Optional[shared_servererrorresponse.ServerErrorResponse] = dataclasses.field(default=None)
    validation_error_response: Optional[shared_validationerrorresponse.ValidationErrorResponse] = dataclasses.field(default=None)
    
