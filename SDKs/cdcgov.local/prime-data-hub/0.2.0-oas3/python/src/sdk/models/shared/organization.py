import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import settingmetadata as shared_settingmetadata

class OrganizationJurisdictionEnum(str, Enum):
    NATIONAL = "National"
    STATE = "State"
    COUNTY = "County"


@dataclass_json
@dataclasses.dataclass
class Organization:
    r"""Organization
    An organization connected to data hub
    """
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    jurisdiction: OrganizationJurisdictionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jurisdiction') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    county_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countyName') }})
    meta: Optional[shared_settingmetadata.SettingMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    state_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateCode') }})
    
