import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stackconfigurationmanager as shared_stackconfigurationmanager


@dataclass_json
@dataclasses.dataclass
class AgentVersion:
    r"""AgentVersion
    Describes an agent version.
    """
    
    configuration_manager: Optional[shared_stackconfigurationmanager.StackConfigurationManager] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationManager') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
