import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountlevelpermissions as shared_accountlevelpermissions
from ..shared import bucketlevelpermissions as shared_bucketlevelpermissions


@dataclass_json
@dataclasses.dataclass
class BucketPermissionConfiguration:
    r"""BucketPermissionConfiguration
    Provides information about the account-level and bucket-level permissions settings for an S3 bucket.
    """
    
    account_level_permissions: Optional[shared_accountlevelpermissions.AccountLevelPermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountLevelPermissions') }})
    bucket_level_permissions: Optional[shared_bucketlevelpermissions.BucketLevelPermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketLevelPermissions') }})
    
