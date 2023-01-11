import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import builtinslottypesummary as shared_builtinslottypesummary


@dataclass_json
@dataclasses.dataclass
class ListBuiltInSlotTypesResponse:
    built_in_slot_type_summaries: Optional[list[shared_builtinslottypesummary.BuiltInSlotTypeSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtInSlotTypeSummaries') }})
    locale_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
