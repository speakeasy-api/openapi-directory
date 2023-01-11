import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rotationrulestype as shared_rotationrulestype


@dataclass_json
@dataclasses.dataclass
class RotateSecretRequest:
    secret_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretId') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    rotation_lambda_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RotationLambdaARN') }})
    rotation_rules: Optional[shared_rotationrulestype.RotationRulesType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RotationRules') }})
    
