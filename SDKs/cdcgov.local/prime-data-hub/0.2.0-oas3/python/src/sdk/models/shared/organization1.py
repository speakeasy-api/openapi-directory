import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organization as shared_organization


@dataclass_json
@dataclasses.dataclass
class Organization1:
    r"""Organization1
    An organization connected to data hub
    """
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    jurisdiction: shared_organization.OrganizationJurisdictionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jurisdiction') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    county_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countyName') }})
    state_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateCode') }})
    
