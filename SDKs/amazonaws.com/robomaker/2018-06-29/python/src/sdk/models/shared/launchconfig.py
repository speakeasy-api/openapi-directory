import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portforwardingconfig as shared_portforwardingconfig


@dataclass_json
@dataclasses.dataclass
class LaunchConfig:
    r"""LaunchConfig
    Information about a launch configuration.
    """
    
    launch_file: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchFile') }})
    package_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    environment_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    port_forwarding_config: Optional[shared_portforwardingconfig.PortForwardingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portForwardingConfig') }})
    stream_ui: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamUI') }})
    
