import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1tags_1percent_7btag_idpercent_7d_1resources_post_requestbody_content_application_1json_schema as shared_onev2_1tags_1percent_7btag_idpercent_7d_1resources_post_requestbody_content_application_1json_schema
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class UntagResourcePathParams:
    tag_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UntagResource401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class UntagResourceRequest:
    path_params: UntagResourcePathParams = dataclasses.field()
    request: shared_onev2_1tags_1percent_7btag_idpercent_7d_1resources_post_requestbody_content_application_1json_schema.Onev21tags1Percent7BtagIDPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UntagResourceResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    untag_resource_401_application_json_object: Optional[UntagResource401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
