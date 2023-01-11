import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import profiletime as shared_profiletime


@dataclass_json
@dataclasses.dataclass
class ListProfileTimesResponse:
    r"""ListProfileTimesResponse
    The structure representing the listProfileTimesResponse.
    """
    
    profile_times: list[shared_profiletime.ProfileTime] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileTimes') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
