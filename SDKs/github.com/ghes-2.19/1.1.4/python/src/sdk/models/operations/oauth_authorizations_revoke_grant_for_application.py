import dataclasses



@dataclasses.dataclass
class OauthAuthorizationsRevokeGrantForApplicationPathParams:
    access_token: str = dataclasses.field(metadata={'path_param': { 'field_name': 'access_token', 'style': 'simple', 'explode': False }})
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OauthAuthorizationsRevokeGrantForApplicationRequest:
    path_params: OauthAuthorizationsRevokeGrantForApplicationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OauthAuthorizationsRevokeGrantForApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
