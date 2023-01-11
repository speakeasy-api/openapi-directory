import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runtimeconfiguration as shared_runtimeconfiguration


@dataclass_json
@dataclasses.dataclass
class UpdateRuntimeConfigurationInput:
    r"""UpdateRuntimeConfigurationInput
    Represents the input for a request operation.
    """
    
    fleet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    runtime_configuration: shared_runtimeconfiguration.RuntimeConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeConfiguration') }})
    
