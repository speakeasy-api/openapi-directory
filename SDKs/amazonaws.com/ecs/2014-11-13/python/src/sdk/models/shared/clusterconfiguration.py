import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import executecommandconfiguration as shared_executecommandconfiguration


@dataclass_json
@dataclasses.dataclass
class ClusterConfiguration:
    r"""ClusterConfiguration
    The execute command configuration for the cluster.
    """
    
    execute_command_configuration: Optional[shared_executecommandconfiguration.ExecuteCommandConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executeCommandConfiguration') }})
    
