import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activecontext as shared_activecontext
from ..shared import dialogaction as shared_dialogaction
from ..shared import intentsummary as shared_intentsummary


@dataclass_json
@dataclasses.dataclass
class GetSessionResponse:
    active_contexts: Optional[list[shared_activecontext.ActiveContext]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeContexts') }})
    dialog_action: Optional[shared_dialogaction.DialogAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogAction') }})
    recent_intent_summary_view: Optional[list[shared_intentsummary.IntentSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentIntentSummaryView') }})
    session_attributes: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionAttributes') }})
    session_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    
