import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateWebhookQueryParams:
    workspace: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateWebhookRequestBodyWebhook:
    collection: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateWebhookRequestBody:
    webhook: Optional[CreateWebhookRequestBodyWebhook] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    

@dataclasses.dataclass
class CreateWebhookRequest:
    query_params: CreateWebhookQueryParams = dataclasses.field()
    request: Optional[CreateWebhookRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
