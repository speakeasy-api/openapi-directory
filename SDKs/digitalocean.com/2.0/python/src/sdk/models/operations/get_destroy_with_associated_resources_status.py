import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_1percent_7bdroplet_idpercent_7d_1destroy_with_associated_resources_1status_get_responses_200_content_application_1json_schema_properties_droplet as shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1destroy_with_associated_resources_1status_get_responses_200_content_application_1json_schema_properties_droplet
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetDestroyWithAssociatedResourcesStatusPathParams:
    droplet_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'droplet_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetDestroyWithAssociatedResourcesStatus200ApplicationJSONDroplet:
    r"""GetDestroyWithAssociatedResourcesStatus200ApplicationJSONDroplet
    An object containing information about a resource scheduled for deletion.
    """
    
    destroyed_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destroyed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_message') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDestroyWithAssociatedResourcesStatus200ApplicationJSONResources:
    r"""GetDestroyWithAssociatedResourcesStatus200ApplicationJSONResources
    An object containing additional information about resource related to a Droplet requested to be destroyed.
    """
    
    snapshots: Optional[list[shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1destroy_with_associated_resources_1status_get_responses_200_content_application_1json_schema_properties_droplet.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshots') }})
    volume_snapshots: Optional[list[shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1destroy_with_associated_resources_1status_get_responses_200_content_application_1json_schema_properties_droplet.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume_snapshots') }})
    volumes: Optional[list[shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1destroy_with_associated_resources_1status_get_responses_200_content_application_1json_schema_properties_droplet.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDestroyWithAssociatedResourcesStatus200ApplicationJSON:
    r"""GetDestroyWithAssociatedResourcesStatus200ApplicationJSON
    An objects containing information about a resources scheduled for deletion.
    """
    
    completed_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    droplet: Optional[GetDestroyWithAssociatedResourcesStatus200ApplicationJSONDroplet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet') }})
    failures: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    resources: Optional[GetDestroyWithAssociatedResourcesStatus200ApplicationJSONResources] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDestroyWithAssociatedResourcesStatus401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetDestroyWithAssociatedResourcesStatusRequest:
    path_params: GetDestroyWithAssociatedResourcesStatusPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDestroyWithAssociatedResourcesStatusResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_destroy_with_associated_resources_status_200_application_json_object: Optional[GetDestroyWithAssociatedResourcesStatus200ApplicationJSON] = dataclasses.field(default=None)
    get_destroy_with_associated_resources_status_401_application_json_object: Optional[GetDestroyWithAssociatedResourcesStatus401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
