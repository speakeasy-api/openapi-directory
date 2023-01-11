import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import field as shared_field
from ..shared import thingconnectivityindexingmode_enum as shared_thingconnectivityindexingmode_enum
from ..shared import thingindexingmode_enum as shared_thingindexingmode_enum


@dataclass_json
@dataclasses.dataclass
class ThingIndexingConfiguration:
    r"""ThingIndexingConfiguration
    The thing indexing configuration. For more information, see <a href=\"https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html\">Managing Thing Indexing</a>.
    """
    
    thing_indexing_mode: shared_thingindexingmode_enum.ThingIndexingModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingIndexingMode') }})
    custom_fields: Optional[list[shared_field.Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    managed_fields: Optional[list[shared_field.Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedFields') }})
    thing_connectivity_indexing_mode: Optional[shared_thingconnectivityindexingmode_enum.ThingConnectivityIndexingModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingConnectivityIndexingMode') }})
    
