import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationsyncmode_enum as shared_destinationsyncmode_enum
from ..shared import syncmode_enum as shared_syncmode_enum


@dataclass_json
@dataclasses.dataclass
class AirbyteStreamConfiguration:
    r"""AirbyteStreamConfiguration
    the mutable part of the stream to configure the destination
    """
    
    destination_sync_mode: shared_destinationsyncmode_enum.DestinationSyncModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationSyncMode') }})
    sync_mode: shared_syncmode_enum.SyncModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncMode') }})
    alias_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliasName') }})
    cursor_field: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursorField') }})
    primary_key: Optional[list[list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryKey') }})
    selected: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected') }})
    
