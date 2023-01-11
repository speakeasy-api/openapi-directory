import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acknowledgeflow as shared_acknowledgeflow
from ..shared import initializationconfiguration as shared_initializationconfiguration


@dataclass_json
@dataclasses.dataclass
class AlarmCapabilities:
    r"""AlarmCapabilities
    Contains the configuration information of alarm state changes.
    """
    
    acknowledge_flow: Optional[shared_acknowledgeflow.AcknowledgeFlow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgeFlow') }})
    initialization_configuration: Optional[shared_initializationconfiguration.InitializationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializationConfiguration') }})
    
