import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class DestroyWithAssociatedResourcesDangerousPathParams:
    droplet_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'droplet_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DestroyWithAssociatedResourcesDangerousHeaders:
    x_dangerous: bool = dataclasses.field(metadata={'header': { 'field_name': 'X-Dangerous', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DestroyWithAssociatedResourcesDangerous401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class DestroyWithAssociatedResourcesDangerousRequest:
    headers: DestroyWithAssociatedResourcesDangerousHeaders = dataclasses.field()
    path_params: DestroyWithAssociatedResourcesDangerousPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DestroyWithAssociatedResourcesDangerousResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    destroy_with_associated_resources_dangerous_401_application_json_object: Optional[DestroyWithAssociatedResourcesDangerous401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
