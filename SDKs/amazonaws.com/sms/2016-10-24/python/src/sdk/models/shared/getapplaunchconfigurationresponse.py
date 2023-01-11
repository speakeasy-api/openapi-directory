import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servergrouplaunchconfiguration as shared_servergrouplaunchconfiguration


@dataclass_json
@dataclasses.dataclass
class GetAppLaunchConfigurationResponse:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    auto_launch: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoLaunch') }})
    role_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleName') }})
    server_group_launch_configurations: Optional[list[shared_servergrouplaunchconfiguration.ServerGroupLaunchConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroupLaunchConfigurations') }})
    
