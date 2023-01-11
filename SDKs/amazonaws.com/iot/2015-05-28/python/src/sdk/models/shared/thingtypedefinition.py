import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import thingtypemetadata as shared_thingtypemetadata
from ..shared import thingtypeproperties as shared_thingtypeproperties


@dataclass_json
@dataclasses.dataclass
class ThingTypeDefinition:
    r"""ThingTypeDefinition
    The definition of the thing type, including thing type name and description.
    """
    
    thing_type_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeArn') }})
    thing_type_metadata: Optional[shared_thingtypemetadata.ThingTypeMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeMetadata') }})
    thing_type_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeName') }})
    thing_type_properties: Optional[shared_thingtypeproperties.ThingTypeProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeProperties') }})
    
