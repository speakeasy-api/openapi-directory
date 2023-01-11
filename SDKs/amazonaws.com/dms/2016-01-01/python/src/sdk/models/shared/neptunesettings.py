import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NeptuneSettings:
    r"""NeptuneSettings
    Provides information that defines an Amazon Neptune endpoint.
    """
    
    s3_bucket_folder: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketFolder') }})
    s3_bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketName') }})
    error_retry_duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorRetryDuration') }})
    iam_auth_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamAuthEnabled') }})
    max_file_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxFileSize') }})
    max_retry_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxRetryCount') }})
    service_access_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceAccessRoleArn') }})
    
