import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PushLoginRequestQueryParams:
    callback: str = dataclasses.field(metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class PushLoginRequest200ApplicationJSON:
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class PushLoginRequestRequest:
    query_params: PushLoginRequestQueryParams = dataclasses.field()
    request: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclasses.dataclass
class PushLoginRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    push_login_request_200_application_json_object: Optional[PushLoginRequest200ApplicationJSON] = dataclasses.field(default=None)
    
