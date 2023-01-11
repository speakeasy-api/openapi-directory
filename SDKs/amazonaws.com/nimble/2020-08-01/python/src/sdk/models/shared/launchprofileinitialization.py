import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import launchprofileinitializationactivedirectory as shared_launchprofileinitializationactivedirectory
from ..shared import launchprofileplatform_enum as shared_launchprofileplatform_enum
from ..shared import launchprofileinitializationscript as shared_launchprofileinitializationscript


@dataclass_json
@dataclasses.dataclass
class LaunchProfileInitialization:
    active_directory: Optional[shared_launchprofileinitializationactivedirectory.LaunchProfileInitializationActiveDirectory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeDirectory') }})
    ec2_security_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2SecurityGroupIds') }})
    launch_profile_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchProfileId') }})
    launch_profile_protocol_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchProfileProtocolVersion') }})
    launch_purpose: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchPurpose') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform: Optional[shared_launchprofileplatform_enum.LaunchProfilePlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    system_initialization_scripts: Optional[list[shared_launchprofileinitializationscript.LaunchProfileInitializationScript]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemInitializationScripts') }})
    user_initialization_scripts: Optional[list[shared_launchprofileinitializationscript.LaunchProfileInitializationScript]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInitializationScripts') }})
    
