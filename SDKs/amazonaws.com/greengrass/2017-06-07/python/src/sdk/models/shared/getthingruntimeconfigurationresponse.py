import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runtimeconfiguration as shared_runtimeconfiguration


@dataclass_json
@dataclasses.dataclass
class GetThingRuntimeConfigurationResponse:
    runtime_configuration: Optional[shared_runtimeconfiguration.RuntimeConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeConfiguration') }})
    
