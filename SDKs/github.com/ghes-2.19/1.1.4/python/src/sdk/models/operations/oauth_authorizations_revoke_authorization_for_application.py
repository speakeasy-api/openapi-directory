import dataclasses



@dataclasses.dataclass
class OauthAuthorizationsRevokeAuthorizationForApplicationPathParams:
    access_token: str = dataclasses.field(metadata={'path_param': { 'field_name': 'access_token', 'style': 'simple', 'explode': False }})
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OauthAuthorizationsRevokeAuthorizationForApplicationRequest:
    path_params: OauthAuthorizationsRevokeAuthorizationForApplicationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OauthAuthorizationsRevokeAuthorizationForApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
