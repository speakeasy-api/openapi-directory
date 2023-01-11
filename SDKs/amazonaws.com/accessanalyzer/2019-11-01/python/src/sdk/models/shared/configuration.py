import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iamroleconfiguration as shared_iamroleconfiguration
from ..shared import kmskeyconfiguration as shared_kmskeyconfiguration
from ..shared import s3bucketconfiguration as shared_s3bucketconfiguration
from ..shared import secretsmanagersecretconfiguration as shared_secretsmanagersecretconfiguration
from ..shared import sqsqueueconfiguration as shared_sqsqueueconfiguration


@dataclass_json
@dataclasses.dataclass
class Configuration:
    iam_role: Optional[shared_iamroleconfiguration.IamRoleConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRole') }})
    kms_key: Optional[shared_kmskeyconfiguration.KmsKeyConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKey') }})
    s3_bucket: Optional[shared_s3bucketconfiguration.S3BucketConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Bucket') }})
    secrets_manager_secret: Optional[shared_secretsmanagersecretconfiguration.SecretsManagerSecretConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretsManagerSecret') }})
    sqs_queue: Optional[shared_sqsqueueconfiguration.SqsQueueConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqsQueue') }})
    
