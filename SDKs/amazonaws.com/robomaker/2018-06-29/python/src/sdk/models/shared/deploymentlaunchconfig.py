import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeploymentLaunchConfig:
    r"""DeploymentLaunchConfig
    Configuration information for a deployment launch.
    """
    
    launch_file: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchFile') }})
    package_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    environment_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    post_launch_file: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postLaunchFile') }})
    pre_launch_file: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preLaunchFile') }})
    
