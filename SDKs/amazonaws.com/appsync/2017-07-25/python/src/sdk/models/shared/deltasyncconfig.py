import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeltaSyncConfig:
    r"""DeltaSyncConfig
    Describes a Delta Sync configuration.
    """
    
    base_table_ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseTableTTL') }})
    delta_sync_table_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaSyncTableName') }})
    delta_sync_table_ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaSyncTableTTL') }})
    
