import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logdestinationconfig as shared_logdestinationconfig


@dataclass_json
@dataclasses.dataclass
class LoggingConfiguration:
    r"""LoggingConfiguration
    Defines how AWS Network Firewall performs logging for a <a>Firewall</a>. 
    """
    
    log_destination_configs: list[shared_logdestinationconfig.LogDestinationConfig] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogDestinationConfigs') }})
    
