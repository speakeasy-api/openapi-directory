import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analyticsmetadatatype as shared_analyticsmetadatatype
from ..shared import challengenametype_enum as shared_challengenametype_enum
from ..shared import usercontextdatatype as shared_usercontextdatatype


@dataclass_json
@dataclasses.dataclass
class RespondToAuthChallengeRequest:
    r"""RespondToAuthChallengeRequest
    The request to respond to an authentication challenge.
    """
    
    challenge_name: shared_challengenametype_enum.ChallengeNameTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeName') }})
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    analytics_metadata: Optional[shared_analyticsmetadatatype.AnalyticsMetadataType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyticsMetadata') }})
    challenge_responses: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeResponses') }})
    client_metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientMetadata') }})
    session: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Session') }})
    user_context_data: Optional[shared_usercontextdatatype.UserContextDataType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserContextData') }})
    
