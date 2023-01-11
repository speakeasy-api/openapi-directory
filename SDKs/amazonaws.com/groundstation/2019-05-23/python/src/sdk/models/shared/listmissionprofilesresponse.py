import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import missionprofilelistitem as shared_missionprofilelistitem


@dataclass_json
@dataclasses.dataclass
class ListMissionProfilesResponse:
    r"""ListMissionProfilesResponse
    <p/>
    """
    
    mission_profile_list: Optional[list[shared_missionprofilelistitem.MissionProfileListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missionProfileList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
