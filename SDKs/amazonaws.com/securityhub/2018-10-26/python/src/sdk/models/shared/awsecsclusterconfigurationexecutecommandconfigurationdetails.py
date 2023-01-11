import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsecsclusterconfigurationexecutecommandconfigurationlogconfigurationdetails as shared_awsecsclusterconfigurationexecutecommandconfigurationlogconfigurationdetails


@dataclass_json
@dataclasses.dataclass
class AwsEcsClusterConfigurationExecuteCommandConfigurationDetails:
    r"""AwsEcsClusterConfigurationExecuteCommandConfigurationDetails
    Contains the run command configuration for the cluster.
    """
    
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    log_configuration: Optional[shared_awsecsclusterconfigurationexecutecommandconfigurationlogconfigurationdetails.AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogConfiguration') }})
    logging: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Logging') }})
    
