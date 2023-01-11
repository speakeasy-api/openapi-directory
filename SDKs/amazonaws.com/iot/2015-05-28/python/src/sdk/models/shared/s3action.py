import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cannedaccesscontrollist_enum as shared_cannedaccesscontrollist_enum


@dataclass_json
@dataclasses.dataclass
class S3Action:
    r"""S3Action
    Describes an action to write data to an Amazon S3 bucket.
    """
    
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    canned_acl: Optional[shared_cannedaccesscontrollist_enum.CannedAccessControlListEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cannedAcl') }})
    
