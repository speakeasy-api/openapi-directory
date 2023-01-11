import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationsyncstatus_enum as shared_configurationsyncstatus_enum
from ..shared import telemetry_enum as shared_telemetry_enum


@dataclass_json
@dataclasses.dataclass
class TelemetryConfiguration:
    r"""TelemetryConfiguration
    Configuration settings for running telemetry.
    """
    
    telemetry: shared_telemetry_enum.TelemetryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Telemetry') }})
    configuration_sync_status: Optional[shared_configurationsyncstatus_enum.ConfigurationSyncStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSyncStatus') }})
    
