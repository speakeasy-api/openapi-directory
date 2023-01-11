import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import field as shared_field
from ..shared import thinggroupindexingmode_enum as shared_thinggroupindexingmode_enum


@dataclass_json
@dataclasses.dataclass
class ThingGroupIndexingConfiguration:
    r"""ThingGroupIndexingConfiguration
    Thing group indexing configuration.
    """
    
    thing_group_indexing_mode: shared_thinggroupindexingmode_enum.ThingGroupIndexingModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupIndexingMode') }})
    custom_fields: Optional[list[shared_field.Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    managed_fields: Optional[list[shared_field.Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedFields') }})
    
