import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import enrollmentfiltername_enum as shared_enrollmentfiltername_enum


@dataclass_json
@dataclasses.dataclass
class EnrollmentFilter:
    r"""EnrollmentFilter
    Describes a filter that returns a more specific list of account enrollment statuses. Use this filter with the <a>GetEnrollmentStatusesForOrganization</a> action.
    """
    
    name: Optional[shared_enrollmentfiltername_enum.EnrollmentFilterNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
