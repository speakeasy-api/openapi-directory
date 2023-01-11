import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cpuvendorarchitecture_enum as shared_cpuvendorarchitecture_enum


@dataclass_json
@dataclasses.dataclass
class RecommendationPreferences:
    r"""RecommendationPreferences
    Describes preferences for recommendations.
    """
    
    cpu_vendor_architectures: Optional[list[shared_cpuvendorarchitecture_enum.CPUVendorArchitectureEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuVendorArchitectures') }})
    
