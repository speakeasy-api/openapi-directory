import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class KeyRevokeNosecretQueryParams:
    email: str = dataclasses.field(metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    phone: str = dataclasses.field(metadata={'query_param': { 'field_name': 'phone', 'style': 'form', 'explode': True }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class KeyRevokeNosecret200ApplicationJSON:
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class KeyRevokeNosecretRequest:
    query_params: KeyRevokeNosecretQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class KeyRevokeNosecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    key_revoke_nosecret_200_application_json_object: Optional[KeyRevokeNosecret200ApplicationJSON] = dataclasses.field(default=None)
    
