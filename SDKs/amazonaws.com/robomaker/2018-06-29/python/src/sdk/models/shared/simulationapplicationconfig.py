import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import launchconfig as shared_launchconfig
from ..shared import tool as shared_tool
from ..shared import uploadconfiguration as shared_uploadconfiguration
from ..shared import worldconfig as shared_worldconfig


@dataclass_json
@dataclasses.dataclass
class SimulationApplicationConfig:
    r"""SimulationApplicationConfig
    Information about a simulation application configuration.
    """
    
    application: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    launch_config: shared_launchconfig.LaunchConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchConfig') }})
    application_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationVersion') }})
    tools: Optional[list[shared_tool.Tool]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tools') }})
    upload_configurations: Optional[list[shared_uploadconfiguration.UploadConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadConfigurations') }})
    use_default_tools: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDefaultTools') }})
    use_default_upload_configurations: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDefaultUploadConfigurations') }})
    world_configs: Optional[list[shared_worldconfig.WorldConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('worldConfigs') }})
    
