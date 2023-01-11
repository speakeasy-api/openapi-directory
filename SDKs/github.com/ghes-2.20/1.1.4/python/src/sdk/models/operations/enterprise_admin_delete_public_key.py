import dataclasses



@dataclasses.dataclass
class EnterpriseAdminDeletePublicKeyPathParams:
    key_ids: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key_ids', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminDeletePublicKeyRequest:
    path_params: EnterpriseAdminDeletePublicKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminDeletePublicKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
