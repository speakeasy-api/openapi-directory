import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentlaunchconfig as shared_deploymentlaunchconfig


@dataclass_json
@dataclasses.dataclass
class DeploymentApplicationConfig:
    r"""DeploymentApplicationConfig
    Information about a deployment application configuration.
    """
    
    application: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    application_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationVersion') }})
    launch_config: shared_deploymentlaunchconfig.DeploymentLaunchConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchConfig') }})
    
