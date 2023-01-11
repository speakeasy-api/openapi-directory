import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0 as shared_onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0


@dataclass_json
@dataclasses.dataclass
class Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources:
    r"""Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources
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
class Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput:
    r"""Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput
    A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
    Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems:
    r"""Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems
    A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
    Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resources: Optional[Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
