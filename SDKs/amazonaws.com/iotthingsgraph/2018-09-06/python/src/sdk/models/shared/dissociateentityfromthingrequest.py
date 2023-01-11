import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitytype_enum as shared_entitytype_enum


@dataclass_json
@dataclasses.dataclass
class DissociateEntityFromThingRequest:
    entity_type: shared_entitytype_enum.EntityTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityType') }})
    thing_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingName') }})
    
