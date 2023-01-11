import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_1percent_7bdroplet_idpercent_7d_1actions_post_requestbody_content_application_1json_schema_anyof_0 as shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1actions_post_requestbody_content_application_1json_schema_anyof_0
from ..shared import onev2_1droplets_1percent_7bdroplet_idpercent_7d_1actions_post_requestbody_content_application_1json_schema_anyof_6 as shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1actions_post_requestbody_content_application_1json_schema_anyof_6
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class PostDropletActionByTagQueryParams:
    tag_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag_name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class PostDropletActionByTag401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class PostDropletActionByTagRequest:
    query_params: PostDropletActionByTagQueryParams = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostDropletActionByTagResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_droplet_action_by_tag_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    post_droplet_action_by_tag_401_application_json_object: Optional[PostDropletActionByTag401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
