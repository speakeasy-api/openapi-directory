import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lftagpair as shared_lftagpair


@dataclass_json
@dataclasses.dataclass
class ListLfTagsResponse:
    lf_tags: Optional[list[shared_lftagpair.LfTagPair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTags') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
