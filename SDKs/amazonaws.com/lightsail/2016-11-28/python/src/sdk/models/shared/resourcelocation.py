import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regionname_enum as shared_regionname_enum


@dataclass_json
@dataclasses.dataclass
class ResourceLocation:
    r"""ResourceLocation
    Describes the resource location.
    """
    
    availability_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZone') }})
    region_name: Optional[shared_regionname_enum.RegionNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionName') }})
    
