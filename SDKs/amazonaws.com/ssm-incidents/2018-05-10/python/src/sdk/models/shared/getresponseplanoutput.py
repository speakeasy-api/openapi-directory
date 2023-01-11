import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action as shared_action
from ..shared import chatchannel as shared_chatchannel
from ..shared import incidenttemplate as shared_incidenttemplate


@dataclass_json
@dataclasses.dataclass
class GetResponsePlanOutput:
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    incident_template: shared_incidenttemplate.IncidentTemplate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentTemplate') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    actions: Optional[list[shared_action.Action]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    chat_channel: Optional[shared_chatchannel.ChatChannel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chatChannel') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    engagements: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engagements') }})
    
