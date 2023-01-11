import dataclasses
from typing import Optional
from ..shared import credential_authorization as shared_credential_authorization


@dataclasses.dataclass
class OrgsListSamlSsoAuthorizationsPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsListSamlSsoAuthorizationsRequest:
    path_params: OrgsListSamlSsoAuthorizationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsListSamlSsoAuthorizationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    credential_authorizations: Optional[list[shared_credential_authorization.CredentialAuthorization]] = dataclasses.field(default=None)
    
