import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesscontrollist as shared_accesscontrollist
from ..shared import blockpublicaccess as shared_blockpublicaccess
from ..shared import bucketpolicy as shared_bucketpolicy


@dataclass_json
@dataclasses.dataclass
class BucketLevelPermissions:
    r"""BucketLevelPermissions
    Provides information about the bucket-level permissions settings for an S3 bucket.
    """
    
    access_control_list: Optional[shared_accesscontrollist.AccessControlList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessControlList') }})
    block_public_access: Optional[shared_blockpublicaccess.BlockPublicAccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockPublicAccess') }})
    bucket_policy: Optional[shared_bucketpolicy.BucketPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPolicy') }})
    
