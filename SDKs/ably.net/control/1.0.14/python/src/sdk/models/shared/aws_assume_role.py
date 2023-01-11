import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AwsAssumeRoleAuthenticationModeEnum(str, Enum):
    ASSUME_ROLE = "assumeRole"


@dataclass_json
@dataclasses.dataclass
class AwsAssumeRole:
    assume_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assumeRoleArn') }})
    authentication_mode: Optional[AwsAssumeRoleAuthenticationModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationMode') }})
    
