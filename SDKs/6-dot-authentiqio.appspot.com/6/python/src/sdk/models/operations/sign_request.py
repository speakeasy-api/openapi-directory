import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SignRequestQueryParams:
    test: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'test', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SignRequest201ApplicationJSON:
    job: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class SignRequestRequest:
    query_params: SignRequestQueryParams = dataclasses.field()
    request: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclasses.dataclass
class SignRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    sign_request_201_application_json_object: Optional[SignRequest201ApplicationJSON] = dataclasses.field(default=None)
    
