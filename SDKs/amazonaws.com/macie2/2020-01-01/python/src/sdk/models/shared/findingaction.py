import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findingactiontype_enum as shared_findingactiontype_enum
from ..shared import apicalldetails as shared_apicalldetails


@dataclass_json
@dataclasses.dataclass
class FindingAction:
    r"""FindingAction
    Provides information about an action that occurred for a resource and produced a policy finding.
    """
    
    action_type: Optional[shared_findingactiontype_enum.FindingActionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    api_call_details: Optional[shared_apicalldetails.APICallDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiCallDetails') }})
    
