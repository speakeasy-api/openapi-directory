import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import builtinintentsummary as shared_builtinintentsummary


@dataclass_json
@dataclasses.dataclass
class ListBuiltInIntentsResponse:
    built_in_intent_summaries: Optional[list[shared_builtinintentsummary.BuiltInIntentSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtInIntentSummaries') }})
    locale_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
