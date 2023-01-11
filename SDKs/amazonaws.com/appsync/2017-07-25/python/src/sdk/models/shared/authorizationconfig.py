import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorizationtype_enum as shared_authorizationtype_enum
from ..shared import awsiamconfig as shared_awsiamconfig


@dataclass_json
@dataclasses.dataclass
class AuthorizationConfig:
    r"""AuthorizationConfig
    The authorization config in case the HTTP endpoint requires authorization.
    """
    
    authorization_type: shared_authorizationtype_enum.AuthorizationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationType') }})
    aws_iam_config: Optional[shared_awsiamconfig.AwsIamConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsIamConfig') }})
    
