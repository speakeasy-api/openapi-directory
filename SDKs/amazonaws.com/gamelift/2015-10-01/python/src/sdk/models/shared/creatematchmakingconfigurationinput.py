import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backfillmode_enum as shared_backfillmode_enum
from ..shared import flexmatchmode_enum as shared_flexmatchmode_enum
from ..shared import gameproperty as shared_gameproperty
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateMatchmakingConfigurationInput:
    r"""CreateMatchmakingConfigurationInput
    Represents the input for a request operation.
    """
    
    acceptance_required: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptanceRequired') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    request_timeout_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestTimeoutSeconds') }})
    rule_set_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleSetName') }})
    acceptance_timeout_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptanceTimeoutSeconds') }})
    additional_player_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalPlayerCount') }})
    backfill_mode: Optional[shared_backfillmode_enum.BackfillModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackfillMode') }})
    custom_event_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomEventData') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    flex_match_mode: Optional[shared_flexmatchmode_enum.FlexMatchModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlexMatchMode') }})
    game_properties: Optional[list[shared_gameproperty.GameProperty]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameProperties') }})
    game_session_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionData') }})
    game_session_queue_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionQueueArns') }})
    notification_target: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationTarget') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
