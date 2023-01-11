import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ambiguousroleresolutiontype_enum as shared_ambiguousroleresolutiontype_enum
from ..shared import rulesconfigurationtype as shared_rulesconfigurationtype
from ..shared import rolemappingtype_enum as shared_rolemappingtype_enum


@dataclass_json
@dataclasses.dataclass
class RoleMapping:
    ambiguous_role_resolution: Optional[shared_ambiguousroleresolutiontype_enum.AmbiguousRoleResolutionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AmbiguousRoleResolution') }})
    rules_configuration: Optional[shared_rulesconfigurationtype.RulesConfigurationType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RulesConfiguration') }})
    type: Optional[shared_rolemappingtype_enum.RoleMappingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
