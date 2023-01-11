import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_1percent_7bdroplet_idpercent_7d_1backups_get_responses_200_content_application_1json_schema_allof_0_properties_backups_items as shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1backups_get_responses_200_content_application_1json_schema_allof_0_properties_backups_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListDropletSnapshotsPathParams:
    droplet_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'droplet_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDropletSnapshotsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletSnapshots200ApplicationJSONLinksPages1:
    last: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletSnapshots200ApplicationJSONLinksPages2:
    first: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletSnapshots200ApplicationJSONLinks:
    pages: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletSnapshots200ApplicationJSONMeta:
    r"""ListDropletSnapshots200ApplicationJSONMeta
    Information about the response itself.
    """
    
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletSnapshots200ApplicationJSON:
    meta: ListDropletSnapshots200ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    links: Optional[ListDropletSnapshots200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    snapshots: Optional[list[shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1backups_get_responses_200_content_application_1json_schema_allof_0_properties_backups_items.Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshots') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletSnapshots401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListDropletSnapshotsRequest:
    path_params: ListDropletSnapshotsPathParams = dataclasses.field()
    query_params: ListDropletSnapshotsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDropletSnapshotsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_droplet_snapshots_200_application_json_object: Optional[ListDropletSnapshots200ApplicationJSON] = dataclasses.field(default=None)
    list_droplet_snapshots_401_application_json_object: Optional[ListDropletSnapshots401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
