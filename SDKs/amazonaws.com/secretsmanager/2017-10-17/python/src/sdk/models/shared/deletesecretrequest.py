import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteSecretRequest:
    secret_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretId') }})
    force_delete_without_recovery: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForceDeleteWithoutRecovery') }})
    recovery_window_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecoveryWindowInDays') }})
    
