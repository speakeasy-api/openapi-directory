import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authenticationresulttype as shared_authenticationresulttype
from ..shared import challengenametype_enum as shared_challengenametype_enum


@dataclass_json
@dataclasses.dataclass
class AdminRespondToAuthChallengeResponse:
    r"""AdminRespondToAuthChallengeResponse
    Responds to the authentication challenge, as an administrator.
    """
    
    authentication_result: Optional[shared_authenticationresulttype.AuthenticationResultType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationResult') }})
    challenge_name: Optional[shared_challengenametype_enum.ChallengeNameTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeName') }})
    challenge_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeParameters') }})
    session: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Session') }})
    
