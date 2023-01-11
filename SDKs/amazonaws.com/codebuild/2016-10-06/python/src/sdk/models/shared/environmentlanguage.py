import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentimage as shared_environmentimage
from ..shared import languagetype_enum as shared_languagetype_enum


@dataclass_json
@dataclasses.dataclass
class EnvironmentLanguage:
    r"""EnvironmentLanguage
    A set of Docker images that are related by programming language and are managed by CodeBuild.
    """
    
    images: Optional[list[shared_environmentimage.EnvironmentImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    language: Optional[shared_languagetype_enum.LanguageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    
