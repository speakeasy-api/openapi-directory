import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsecsclusterconfigurationexecutecommandconfigurationdetails as shared_awsecsclusterconfigurationexecutecommandconfigurationdetails


@dataclass_json
@dataclasses.dataclass
class AwsEcsClusterConfigurationDetails:
    r"""AwsEcsClusterConfigurationDetails
    The run command configuration for the cluster.
    """
    
    execute_command_configuration: Optional[shared_awsecsclusterconfigurationexecutecommandconfigurationdetails.AwsEcsClusterConfigurationExecuteCommandConfigurationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecuteCommandConfiguration') }})
    
