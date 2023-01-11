import dataclasses



@dataclasses.dataclass
class EnterpriseAdminDeletePreReceiveHookPathParams:
    pre_receive_hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminDeletePreReceiveHookRequest:
    path_params: EnterpriseAdminDeletePreReceiveHookPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminDeletePreReceiveHookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
