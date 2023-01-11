import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gamesessionqueuedestination as shared_gamesessionqueuedestination
from ..shared import filterconfiguration as shared_filterconfiguration
from ..shared import playerlatencypolicy as shared_playerlatencypolicy
from ..shared import priorityconfiguration as shared_priorityconfiguration


@dataclass_json
@dataclasses.dataclass
class UpdateGameSessionQueueInput:
    r"""UpdateGameSessionQueueInput
    Represents the input for a request operation.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    custom_event_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomEventData') }})
    destinations: Optional[list[shared_gamesessionqueuedestination.GameSessionQueueDestination]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destinations') }})
    filter_configuration: Optional[shared_filterconfiguration.FilterConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterConfiguration') }})
    notification_target: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationTarget') }})
    player_latency_policies: Optional[list[shared_playerlatencypolicy.PlayerLatencyPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerLatencyPolicies') }})
    priority_configuration: Optional[shared_priorityconfiguration.PriorityConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PriorityConfiguration') }})
    timeout_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeoutInSeconds') }})
    
