import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aclgrantee as shared_aclgrantee
from ..shared import aclpermission_enum as shared_aclpermission_enum


@dataclass_json
@dataclasses.dataclass
class S3BucketACLGrantConfiguration:
    r"""S3BucketACLGrantConfiguration
    A proposed access control list grant configuration for an Amazon S3 bucket. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls\">How to Specify an ACL</a>.
    """
    
    grantee: shared_aclgrantee.ACLGrantee = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantee') }})
    permission: shared_aclpermission_enum.ACLPermissionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    
