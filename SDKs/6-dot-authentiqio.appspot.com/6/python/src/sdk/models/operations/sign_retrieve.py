import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SignRetrievePathParams:
    job: str = dataclasses.field(metadata={'path_param': { 'field_name': 'job', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SignRetrieveJwt:
    exp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exp') }})
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    sub: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub') }})
    

@dataclasses.dataclass
class SignRetrieveRequest:
    path_params: SignRetrievePathParams = dataclasses.field()
    

@dataclasses.dataclass
class SignRetrieveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    jwt: Optional[SignRetrieveJwt] = dataclasses.field(default=None)
    
