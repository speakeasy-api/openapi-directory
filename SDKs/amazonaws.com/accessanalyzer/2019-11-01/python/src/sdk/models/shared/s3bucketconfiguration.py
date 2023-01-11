import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3accesspointconfiguration as shared_s3accesspointconfiguration
from ..shared import s3bucketaclgrantconfiguration as shared_s3bucketaclgrantconfiguration
from ..shared import s3publicaccessblockconfiguration as shared_s3publicaccessblockconfiguration


@dataclass_json
@dataclasses.dataclass
class S3BucketConfiguration:
    r"""S3BucketConfiguration
    Proposed access control configuration for an Amazon S3 bucket. You can propose a configuration for a new Amazon S3 bucket or an existing Amazon S3 bucket that you own by specifying the Amazon S3 bucket policy, bucket ACLs, bucket BPA settings, Amazon S3 access points, and multi-region access points attached to the bucket. If the configuration is for an existing Amazon S3 bucket and you do not specify the Amazon S3 bucket policy, the access preview uses the existing policy attached to the bucket. If the access preview is for a new resource and you do not specify the Amazon S3 bucket policy, the access preview assumes a bucket without a policy. To propose deletion of an existing bucket policy, you can specify an empty string. For more information about bucket policy limits, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html\">Bucket Policy Examples</a>.
    """
    
    access_points: Optional[dict[str, shared_s3accesspointconfiguration.S3AccessPointConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPoints') }})
    bucket_acl_grants: Optional[list[shared_s3bucketaclgrantconfiguration.S3BucketACLGrantConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketAclGrants') }})
    bucket_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPolicy') }})
    bucket_public_access_block: Optional[shared_s3publicaccessblockconfiguration.S3PublicAccessBlockConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPublicAccessBlock') }})
    
