import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items_properties_maintenance_window_allof_0 as shared_onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items_properties_maintenance_window_allof_0
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class UpdateMaintenanceWindowPathParams:
    database_cluster_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMaintenanceWindow401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class UpdateMaintenanceWindowRequest:
    path_params: UpdateMaintenanceWindowPathParams = dataclasses.field()
    request: shared_onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items_properties_maintenance_window_allof_0.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesMaintenanceWindowAllOf0Input = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateMaintenanceWindowResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    update_maintenance_window_401_application_json_object: Optional[UpdateMaintenanceWindow401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
