import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activitytypeinfo as shared_activitytypeinfo


@dataclass_json
@dataclasses.dataclass
class ActivityTypeInfos:
    r"""ActivityTypeInfos
    Contains a paginated list of activity type information structures.
    """
    
    type_infos: list[shared_activitytypeinfo.ActivityTypeInfo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeInfos') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
