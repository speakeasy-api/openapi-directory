import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class OrgsRemoveSamlSsoAuthorizationPathParams:
    credential_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'credential_id', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsRemoveSamlSsoAuthorizationRequest:
    path_params: OrgsRemoveSamlSsoAuthorizationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsRemoveSamlSsoAuthorizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
