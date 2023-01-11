import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountdetails as shared_accountdetails
from ..shared import sendquota as shared_sendquota
from ..shared import suppressionattributes as shared_suppressionattributes


@dataclass_json
@dataclasses.dataclass
class GetAccountResponse:
    r"""GetAccountResponse
    A list of details about the email-sending capabilities of your Amazon SES account in the current AWS Region.
    """
    
    dedicated_ip_auto_warmup_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedIpAutoWarmupEnabled') }})
    details: Optional[shared_accountdetails.AccountDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Details') }})
    enforcement_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnforcementStatus') }})
    production_access_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductionAccessEnabled') }})
    send_quota: Optional[shared_sendquota.SendQuota] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendQuota') }})
    sending_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendingEnabled') }})
    suppression_attributes: Optional[shared_suppressionattributes.SuppressionAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressionAttributes') }})
    
