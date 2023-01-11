import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import telemetryconfiguration as shared_telemetryconfiguration


@dataclass_json
@dataclasses.dataclass
class RuntimeConfiguration:
    r"""RuntimeConfiguration
    Runtime configuration for a thing.
    """
    
    telemetry_configuration: Optional[shared_telemetryconfiguration.TelemetryConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TelemetryConfiguration') }})
    
