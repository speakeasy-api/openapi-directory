import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recoveryoptiontype as shared_recoveryoptiontype


@dataclass_json
@dataclasses.dataclass
class AccountRecoverySettingType:
    r"""AccountRecoverySettingType
    The data type for <code>AccountRecoverySetting</code>.
    """
    
    recovery_mechanisms: Optional[list[shared_recoveryoptiontype.RecoveryOptionType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecoveryMechanisms') }})
    
