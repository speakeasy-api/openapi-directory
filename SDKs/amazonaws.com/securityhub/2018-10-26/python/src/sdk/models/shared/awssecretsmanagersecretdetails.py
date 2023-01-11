import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awssecretsmanagersecretrotationrules as shared_awssecretsmanagersecretrotationrules


@dataclass_json
@dataclasses.dataclass
class AwsSecretsManagerSecretDetails:
    r"""AwsSecretsManagerSecretDetails
    Details about an Secrets Manager secret.
    """
    
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deleted') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rotation_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RotationEnabled') }})
    rotation_lambda_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RotationLambdaArn') }})
    rotation_occurred_within_frequency: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RotationOccurredWithinFrequency') }})
    rotation_rules: Optional[shared_awssecretsmanagersecretrotationrules.AwsSecretsManagerSecretRotationRules] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RotationRules') }})
    
