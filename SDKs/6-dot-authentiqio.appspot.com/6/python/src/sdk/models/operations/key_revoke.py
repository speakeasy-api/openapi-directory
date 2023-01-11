import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class KeyRevokePathParams:
    pk: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PK', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class KeyRevokeQueryParams:
    secret: str = dataclasses.field(metadata={'query_param': { 'field_name': 'secret', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class KeyRevoke200ApplicationJSON:
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class KeyRevokeRequest:
    path_params: KeyRevokePathParams = dataclasses.field()
    query_params: KeyRevokeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class KeyRevokeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    key_revoke_200_application_json_object: Optional[KeyRevoke200ApplicationJSON] = dataclasses.field(default=None)
    
