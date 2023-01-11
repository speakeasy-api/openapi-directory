import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import thinggroupindexingconfiguration as shared_thinggroupindexingconfiguration
from ..shared import thingindexingconfiguration as shared_thingindexingconfiguration


@dataclass_json
@dataclasses.dataclass
class GetIndexingConfigurationResponse:
    thing_group_indexing_configuration: Optional[shared_thinggroupindexingconfiguration.ThingGroupIndexingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupIndexingConfiguration') }})
    thing_indexing_configuration: Optional[shared_thingindexingconfiguration.ThingIndexingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingIndexingConfiguration') }})
    
