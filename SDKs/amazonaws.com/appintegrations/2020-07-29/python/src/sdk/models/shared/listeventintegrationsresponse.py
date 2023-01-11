import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventintegration as shared_eventintegration


@dataclass_json
@dataclasses.dataclass
class ListEventIntegrationsResponse:
    event_integrations: Optional[list[shared_eventintegration.EventIntegration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventIntegrations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
