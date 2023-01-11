import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import borrowconfiguration as shared_borrowconfiguration
from ..shared import provisionalconfiguration as shared_provisionalconfiguration
from ..shared import renewtype_enum as shared_renewtype_enum


@dataclass_json
@dataclasses.dataclass
class ConsumptionConfiguration:
    r"""ConsumptionConfiguration
    Details about a consumption configuration.
    """
    
    borrow_configuration: Optional[shared_borrowconfiguration.BorrowConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BorrowConfiguration') }})
    provisional_configuration: Optional[shared_provisionalconfiguration.ProvisionalConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionalConfiguration') }})
    renew_type: Optional[shared_renewtype_enum.RenewTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewType') }})
    
