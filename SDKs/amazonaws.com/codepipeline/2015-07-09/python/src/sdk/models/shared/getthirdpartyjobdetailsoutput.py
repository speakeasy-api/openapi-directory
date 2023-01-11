import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import thirdpartyjobdetails as shared_thirdpartyjobdetails


@dataclass_json
@dataclasses.dataclass
class GetThirdPartyJobDetailsOutput:
    r"""GetThirdPartyJobDetailsOutput
    Represents the output of a <code>GetThirdPartyJobDetails</code> action.
    """
    
    job_details: Optional[shared_thirdpartyjobdetails.ThirdPartyJobDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDetails') }})
    
