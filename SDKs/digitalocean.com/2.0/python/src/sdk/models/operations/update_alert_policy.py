import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1monitoring_1alerts_post_requestbody_content_application_1json_schema as shared_onev2_1monitoring_1alerts_post_requestbody_content_application_1json_schema
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema
from ..shared import onev2_1monitoring_1alerts_get_responses_200_content_application_1json_schema_allof_0_properties_policies_items as shared_onev2_1monitoring_1alerts_get_responses_200_content_application_1json_schema_allof_0_properties_policies_items


@dataclasses.dataclass
class UpdateAlertPolicyPathParams:
    alert_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'alert_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAlertPolicy401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class UpdateAlertPolicyRequest:
    path_params: UpdateAlertPolicyPathParams = dataclasses.field()
    request: shared_onev2_1monitoring_1alerts_post_requestbody_content_application_1json_schema.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateAlertPolicyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    update_alert_policy_401_application_json_object: Optional[UpdateAlertPolicy401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    onev2_1monitoring_1alerts_get_responses_200_content_application_1json_schema_all_of_0_properties_policies_items: Optional[shared_onev2_1monitoring_1alerts_get_responses_200_content_application_1json_schema_allof_0_properties_policies_items.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems] = dataclasses.field(default=None)
    
