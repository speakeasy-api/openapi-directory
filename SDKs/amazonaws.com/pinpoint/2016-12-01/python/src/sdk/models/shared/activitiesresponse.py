import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activityresponse as shared_activityresponse


@dataclass_json
@dataclasses.dataclass
class ActivitiesResponse:
    r"""ActivitiesResponse
    Provides information about the activities that were performed by a campaign.
    """
    
    item: list[shared_activityresponse.ActivityResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
