import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import challengename_enum as shared_challengename_enum
from ..shared import challengeresponse_enum as shared_challengeresponse_enum


@dataclass_json
@dataclasses.dataclass
class ChallengeResponseType:
    r"""ChallengeResponseType
    The challenge response type.
    """
    
    challenge_name: Optional[shared_challengename_enum.ChallengeNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeName') }})
    challenge_response: Optional[shared_challengeresponse_enum.ChallengeResponseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeResponse') }})
    
