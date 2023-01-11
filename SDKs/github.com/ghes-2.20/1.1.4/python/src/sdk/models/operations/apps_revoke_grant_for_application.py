import dataclasses



@dataclasses.dataclass
class AppsRevokeGrantForApplicationPathParams:
    access_token: str = dataclasses.field(metadata={'path_param': { 'field_name': 'access_token', 'style': 'simple', 'explode': False }})
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsRevokeGrantForApplicationRequest:
    path_params: AppsRevokeGrantForApplicationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsRevokeGrantForApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
