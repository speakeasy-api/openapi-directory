import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import launchprofileplatform_enum as shared_launchprofileplatform_enum
from ..shared import studiocomponentinitializationscriptruncontext_enum as shared_studiocomponentinitializationscriptruncontext_enum


@dataclass_json
@dataclasses.dataclass
class StudioComponentInitializationScript:
    r"""StudioComponentInitializationScript
    Initialization scripts for studio components.
    """
    
    launch_profile_protocol_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchProfileProtocolVersion') }})
    platform: Optional[shared_launchprofileplatform_enum.LaunchProfilePlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    run_context: Optional[shared_studiocomponentinitializationscriptruncontext_enum.StudioComponentInitializationScriptRunContextEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runContext') }})
    script: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    
