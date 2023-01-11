import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ThingTypeProperties:
    r"""ThingTypeProperties
    The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
    """
    
    searchable_attributes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchableAttributes') }})
    thing_type_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeDescription') }})
    
