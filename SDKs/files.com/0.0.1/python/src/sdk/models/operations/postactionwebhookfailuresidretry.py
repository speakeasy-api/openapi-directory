import dataclasses



@dataclasses.dataclass
class PostActionWebhookFailuresIDRetryPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostActionWebhookFailuresIDRetryRequest:
    path_params: PostActionWebhookFailuresIDRetryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostActionWebhookFailuresIDRetryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
