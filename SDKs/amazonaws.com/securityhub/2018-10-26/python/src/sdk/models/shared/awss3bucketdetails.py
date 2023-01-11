import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketbucketlifecycleconfigurationdetails as shared_awss3bucketbucketlifecycleconfigurationdetails
from ..shared import awss3bucketloggingconfiguration as shared_awss3bucketloggingconfiguration
from ..shared import awss3bucketnotificationconfiguration as shared_awss3bucketnotificationconfiguration
from ..shared import awss3bucketwebsiteconfiguration as shared_awss3bucketwebsiteconfiguration
from ..shared import awss3accountpublicaccessblockdetails as shared_awss3accountpublicaccessblockdetails
from ..shared import awss3bucketserversideencryptionconfiguration as shared_awss3bucketserversideencryptionconfiguration


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketDetails:
    r"""AwsS3BucketDetails
    The details of an Amazon S3 bucket.
    """
    
    access_control_list: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessControlList') }})
    bucket_lifecycle_configuration: Optional[shared_awss3bucketbucketlifecycleconfigurationdetails.AwsS3BucketBucketLifecycleConfigurationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketLifecycleConfiguration') }})
    bucket_logging_configuration: Optional[shared_awss3bucketloggingconfiguration.AwsS3BucketLoggingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketLoggingConfiguration') }})
    bucket_notification_configuration: Optional[shared_awss3bucketnotificationconfiguration.AwsS3BucketNotificationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketNotificationConfiguration') }})
    bucket_website_configuration: Optional[shared_awss3bucketwebsiteconfiguration.AwsS3BucketWebsiteConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketWebsiteConfiguration') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    owner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    owner_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerName') }})
    public_access_block_configuration: Optional[shared_awss3accountpublicaccessblockdetails.AwsS3AccountPublicAccessBlockDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicAccessBlockConfiguration') }})
    server_side_encryption_configuration: Optional[shared_awss3bucketserversideencryptionconfiguration.AwsS3BucketServerSideEncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerSideEncryptionConfiguration') }})
    
