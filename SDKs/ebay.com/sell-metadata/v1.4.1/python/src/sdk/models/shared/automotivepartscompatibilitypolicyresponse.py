import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import automotivepartscompatibilitypolicy as shared_automotivepartscompatibilitypolicy
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class AutomotivePartsCompatibilityPolicyResponse:
    automotive_parts_compatibility_policies: Optional[list[shared_automotivepartscompatibilitypolicy.AutomotivePartsCompatibilityPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automotivePartsCompatibilityPolicies') }})
    warnings: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
