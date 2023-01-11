import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import effectivepermission_enum as shared_effectivepermission_enum
from ..shared import bucketpermissionconfiguration as shared_bucketpermissionconfiguration


@dataclass_json
@dataclasses.dataclass
class BucketPublicAccess:
    r"""BucketPublicAccess
    Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible.
    """
    
    effective_permission: Optional[shared_effectivepermission_enum.EffectivePermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectivePermission') }})
    permission_configuration: Optional[shared_bucketpermissionconfiguration.BucketPermissionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionConfiguration') }})
    
