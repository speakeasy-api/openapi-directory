import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validatepolicyfindingtype_enum as shared_validatepolicyfindingtype_enum
from ..shared import location as shared_location


@dataclass_json
@dataclasses.dataclass
class ValidatePolicyFinding:
    r"""ValidatePolicyFinding
    A finding in a policy. Each finding is an actionable recommendation that can be used to improve the policy.
    """
    
    finding_details: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingDetails') }})
    finding_type: shared_validatepolicyfindingtype_enum.ValidatePolicyFindingTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingType') }})
    issue_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueCode') }})
    learn_more_link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnMoreLink') }})
    locations: list[shared_location.Location] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    
