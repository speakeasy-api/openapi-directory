import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0 as shared_onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclass_json
@dataclasses.dataclass
class ListAllTags200ApplicationJSONLinksPages1:
    last: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllTags200ApplicationJSONLinksPages2:
    first: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllTags200ApplicationJSONLinks:
    pages: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllTags200ApplicationJSONMeta:
    r"""ListAllTags200ApplicationJSONMeta
    Information about the response itself.
    """
    
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllTags200ApplicationJSONTagsResources:
    r"""ListAllTags200ApplicationJSONTagsResources
    Tagged Resource Statistics include metadata regarding the resource type that has been tagged.
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    databases: Optional[shared_onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databases') }})
    droplets: Optional[shared_onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplets') }})
    imgages: Optional[shared_onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imgages') }})
    last_tagged_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_tagged_uri') }})
    volume_snapshots: Optional[shared_onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume_snapshots') }})
    volumes: Optional[shared_onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllTags200ApplicationJSONTags:
    r"""ListAllTags200ApplicationJSONTags
    A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
    Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resources: Optional[ListAllTags200ApplicationJSONTagsResources] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllTags200ApplicationJSON:
    meta: ListAllTags200ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    links: Optional[ListAllTags200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    tags: Optional[list[ListAllTags200ApplicationJSONTags]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllTags401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListAllTagsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_all_tags_200_application_json_object: Optional[ListAllTags200ApplicationJSON] = dataclasses.field(default=None)
    list_all_tags_401_application_json_object: Optional[ListAllTags401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
