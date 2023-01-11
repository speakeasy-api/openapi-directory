import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grant as shared_grant
from ..shared import cannedacl_enum as shared_cannedacl_enum
from ..shared import encryption as shared_encryption
from ..shared import storageclass_enum as shared_storageclass_enum


@dataclass_json
@dataclasses.dataclass
class S3Location:
    r"""S3Location
    Contains information about the location in Amazon S3 where the select job results are stored.
    """
    
    access_control_list: Optional[list[shared_grant.Grant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessControlList') }})
    bucket_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketName') }})
    canned_acl: Optional[shared_cannedacl_enum.CannedACLEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CannedACL') }})
    encryption: Optional[shared_encryption.Encryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    storage_class: Optional[shared_storageclass_enum.StorageClassEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageClass') }})
    tagging: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tagging') }})
    user_metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserMetadata') }})
    
