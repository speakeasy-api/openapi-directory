import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems:
    r"""Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems
    The linked actions can be used to check the status of a Droplet's create event.
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rel') }})
    
