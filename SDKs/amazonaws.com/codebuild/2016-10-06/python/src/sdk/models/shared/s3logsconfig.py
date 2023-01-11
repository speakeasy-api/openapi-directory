import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucketowneraccess_enum as shared_bucketowneraccess_enum
from ..shared import logsconfigstatustype_enum as shared_logsconfigstatustype_enum


@dataclass_json
@dataclasses.dataclass
class S3LogsConfig:
    r"""S3LogsConfig
     Information about S3 logs for a build project. 
    """
    
    status: shared_logsconfigstatustype_enum.LogsConfigStatusTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    bucket_owner_access: Optional[shared_bucketowneraccess_enum.BucketOwnerAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketOwnerAccess') }})
    encryption_disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionDisabled') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
