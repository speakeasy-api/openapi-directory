import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blockpublicaccess as shared_blockpublicaccess


@dataclass_json
@dataclasses.dataclass
class AccountLevelPermissions:
    r"""AccountLevelPermissions
    Provides information about the account-level permissions settings that apply to an S3 bucket.
    """
    
    block_public_access: Optional[shared_blockpublicaccess.BlockPublicAccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockPublicAccess') }})
    
