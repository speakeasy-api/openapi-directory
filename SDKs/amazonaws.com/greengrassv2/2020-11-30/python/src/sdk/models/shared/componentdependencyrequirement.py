import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import componentdependencytype_enum as shared_componentdependencytype_enum


@dataclass_json
@dataclasses.dataclass
class ComponentDependencyRequirement:
    dependency_type: Optional[shared_componentdependencytype_enum.ComponentDependencyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencyType') }})
    version_requirement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionRequirement') }})
    
