import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0:
    r"""Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0
    Tagged Resource Statistics include metadata regarding the resource type that has been tagged.
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    last_tagged_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_tagged_uri') }})
    
