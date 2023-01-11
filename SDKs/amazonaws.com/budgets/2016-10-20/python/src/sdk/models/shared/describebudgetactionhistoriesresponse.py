import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionhistory as shared_actionhistory


@dataclass_json
@dataclasses.dataclass
class DescribeBudgetActionHistoriesResponse:
    action_histories: list[shared_actionhistory.ActionHistory] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionHistories') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
