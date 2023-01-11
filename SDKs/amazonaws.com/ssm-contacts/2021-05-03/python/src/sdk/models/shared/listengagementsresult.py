import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import engagement as shared_engagement


@dataclass_json
@dataclasses.dataclass
class ListEngagementsResult:
    engagements: list[shared_engagement.Engagement] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Engagements') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
