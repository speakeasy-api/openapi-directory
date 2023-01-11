import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usagestatisticsfiltercomparator_enum as shared_usagestatisticsfiltercomparator_enum
from ..shared import usagestatisticsfilterkey_enum as shared_usagestatisticsfilterkey_enum


@dataclass_json
@dataclasses.dataclass
class UsageStatisticsFilter:
    r"""UsageStatisticsFilter
    Specifies a condition for filtering the results of a query for quota and usage data for one or more Amazon Macie accounts.
    """
    
    comparator: Optional[shared_usagestatisticsfiltercomparator_enum.UsageStatisticsFilterComparatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    key: Optional[shared_usagestatisticsfilterkey_enum.UsageStatisticsFilterKeyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
