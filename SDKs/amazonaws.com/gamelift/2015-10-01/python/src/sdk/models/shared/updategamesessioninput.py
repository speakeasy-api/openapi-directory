import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import playersessioncreationpolicy_enum as shared_playersessioncreationpolicy_enum
from ..shared import protectionpolicy_enum as shared_protectionpolicy_enum


@dataclass_json
@dataclasses.dataclass
class UpdateGameSessionInput:
    r"""UpdateGameSessionInput
    Represents the input for a request operation.
    """
    
    game_session_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionId') }})
    maximum_player_session_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumPlayerSessionCount') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    player_session_creation_policy: Optional[shared_playersessioncreationpolicy_enum.PlayerSessionCreationPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerSessionCreationPolicy') }})
    protection_policy: Optional[shared_protectionpolicy_enum.ProtectionPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionPolicy') }})
    
