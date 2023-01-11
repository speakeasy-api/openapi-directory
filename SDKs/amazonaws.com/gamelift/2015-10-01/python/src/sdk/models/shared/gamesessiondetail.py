import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gamesession as shared_gamesession
from ..shared import protectionpolicy_enum as shared_protectionpolicy_enum


@dataclass_json
@dataclasses.dataclass
class GameSessionDetail:
    r"""GameSessionDetail
    A game session's properties plus the protection policy currently in force.
    """
    
    game_session: Optional[shared_gamesession.GameSession] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSession') }})
    protection_policy: Optional[shared_protectionpolicy_enum.ProtectionPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionPolicy') }})
    
