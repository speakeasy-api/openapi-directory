import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import defaultaction_enum as shared_defaultaction_enum


@dataclass_json
@dataclasses.dataclass
class UserPoolConfig:
    r"""UserPoolConfig
    Describes an Amazon Cognito user pool configuration.
    """
    
    aws_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    default_action: shared_defaultaction_enum.DefaultActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAction') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPoolId') }})
    app_id_client_regex: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appIdClientRegex') }})
    
