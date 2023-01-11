import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import thingtypedefinition as shared_thingtypedefinition


@dataclass_json
@dataclasses.dataclass
class ListThingTypesResponse:
    r"""ListThingTypesResponse
    The output for the ListThingTypes operation.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    thing_types: Optional[list[shared_thingtypedefinition.ThingTypeDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypes') }})
    
