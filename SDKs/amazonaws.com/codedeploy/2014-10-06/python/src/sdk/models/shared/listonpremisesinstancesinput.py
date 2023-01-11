import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import registrationstatus_enum as shared_registrationstatus_enum
from ..shared import tagfilter as shared_tagfilter


@dataclass_json
@dataclasses.dataclass
class ListOnPremisesInstancesInput:
    r"""ListOnPremisesInstancesInput
    Represents the input of a <code>ListOnPremisesInstances</code> operation.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    registration_status: Optional[shared_registrationstatus_enum.RegistrationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationStatus') }})
    tag_filters: Optional[list[shared_tagfilter.TagFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagFilters') }})
    
