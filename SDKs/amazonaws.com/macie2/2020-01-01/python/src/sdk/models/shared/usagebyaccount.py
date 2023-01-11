import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currency_enum as shared_currency_enum
from ..shared import servicelimit as shared_servicelimit
from ..shared import usagetype_enum as shared_usagetype_enum


@dataclass_json
@dataclasses.dataclass
class UsageByAccount:
    r"""UsageByAccount
    Provides data for a specific usage metric and the corresponding quota for an Amazon Macie account.
    """
    
    currency: Optional[shared_currency_enum.CurrencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    estimated_cost: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedCost') }})
    service_limit: Optional[shared_servicelimit.ServiceLimit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceLimit') }})
    type: Optional[shared_usagetype_enum.UsageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
