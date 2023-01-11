import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trialminutes as shared_trialminutes


@dataclass_json
@dataclasses.dataclass
class AccountSettings:
    r"""AccountSettings
    A container for account-level settings in AWS Device Farm.
    """
    
    aws_account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsAccountNumber') }})
    default_job_timeout_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultJobTimeoutMinutes') }})
    max_job_timeout_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxJobTimeoutMinutes') }})
    max_slots: Optional[dict[str, int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSlots') }})
    skip_app_resign: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipAppResign') }})
    trial_minutes: Optional[shared_trialminutes.TrialMinutes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialMinutes') }})
    unmetered_devices: Optional[dict[str, int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unmeteredDevices') }})
    unmetered_remote_access_devices: Optional[dict[str, int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unmeteredRemoteAccessDevices') }})
    
