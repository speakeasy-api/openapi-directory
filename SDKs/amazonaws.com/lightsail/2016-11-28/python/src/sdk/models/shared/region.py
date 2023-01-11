import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import availabilityzone as shared_availabilityzone
from ..shared import regionname_enum as shared_regionname_enum


@dataclass_json
@dataclasses.dataclass
class Region:
    r"""Region
    Describes the AWS Region.
    """
    
    availability_zones: Optional[list[shared_availabilityzone.AvailabilityZone]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZones') }})
    continent_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continentCode') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[shared_regionname_enum.RegionNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    relational_database_availability_zones: Optional[list[shared_availabilityzone.AvailabilityZone]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseAvailabilityZones') }})
    
