import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class SignRetrieveHeadPathParams:
    job: str = dataclasses.field(metadata={'path_param': { 'field_name': 'job', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SignRetrieveHeadRequest:
    path_params: SignRetrieveHeadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SignRetrieveHeadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    
