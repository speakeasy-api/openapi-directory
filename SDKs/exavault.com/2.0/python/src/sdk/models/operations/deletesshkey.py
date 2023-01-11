import dataclasses



@dataclasses.dataclass
class DeleteSSHKeyPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSSHKeyHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSSHKeyRequest:
    headers: DeleteSSHKeyHeaders = dataclasses.field()
    path_params: DeleteSSHKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSSHKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
