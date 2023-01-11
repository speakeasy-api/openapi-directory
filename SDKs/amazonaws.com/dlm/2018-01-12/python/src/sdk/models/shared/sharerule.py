import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import retentionintervalunitvalues_enum as shared_retentionintervalunitvalues_enum


@dataclass_json
@dataclasses.dataclass
class ShareRule:
    r"""ShareRule
    Specifies a rule for sharing snapshots across Amazon Web Services accounts.
    """
    
    target_accounts: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetAccounts') }})
    unshare_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnshareInterval') }})
    unshare_interval_unit: Optional[shared_retentionintervalunitvalues_enum.RetentionIntervalUnitValuesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnshareIntervalUnit') }})
    
