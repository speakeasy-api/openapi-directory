import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currency_enum as shared_currency_enum
from ..shared import usagetype_enum as shared_usagetype_enum


@dataclass_json
@dataclasses.dataclass
class UsageTotal:
    r"""UsageTotal
    Provides aggregated data for an Amazon Macie usage metric. The value for the metric reports estimated usage data for an account for the preceding 30 days or the current calendar month to date, depending on the time period (timeRange) specified in the request.
    """
    
    currency: Optional[shared_currency_enum.CurrencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    estimated_cost: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedCost') }})
    type: Optional[shared_usagetype_enum.UsageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
