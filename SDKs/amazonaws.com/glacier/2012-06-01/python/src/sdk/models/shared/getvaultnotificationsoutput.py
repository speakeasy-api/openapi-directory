import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vaultnotificationconfig as shared_vaultnotificationconfig


@dataclass_json
@dataclasses.dataclass
class GetVaultNotificationsOutput:
    r"""GetVaultNotificationsOutput
    Contains the Amazon S3 Glacier response to your request.
    """
    
    vault_notification_config: Optional[shared_vaultnotificationconfig.VaultNotificationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vaultNotificationConfig') }})
    
