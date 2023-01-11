import dataclasses



@dataclasses.dataclass
class EnterpriseAdminDeleteGlobalWebhookPathParams:
    hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminDeleteGlobalWebhookHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminDeleteGlobalWebhookRequest:
    headers: EnterpriseAdminDeleteGlobalWebhookHeaders = dataclasses.field()
    path_params: EnterpriseAdminDeleteGlobalWebhookPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminDeleteGlobalWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
