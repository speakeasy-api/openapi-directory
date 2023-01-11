import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentlanguage as shared_environmentlanguage
from ..shared import platformtype_enum as shared_platformtype_enum


@dataclass_json
@dataclasses.dataclass
class EnvironmentPlatform:
    r"""EnvironmentPlatform
    A set of Docker images that are related by platform and are managed by CodeBuild.
    """
    
    languages: Optional[list[shared_environmentlanguage.EnvironmentLanguage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    platform: Optional[shared_platformtype_enum.PlatformTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    
