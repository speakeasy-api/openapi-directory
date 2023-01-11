import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usagerecordresultstatus_enum as shared_usagerecordresultstatus_enum
from ..shared import usagerecord as shared_usagerecord


@dataclass_json
@dataclasses.dataclass
class UsageRecordResult:
    r"""UsageRecordResult
    A UsageRecordResult indicates the status of a given UsageRecord processed by BatchMeterUsage.
    """
    
    metering_record_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeteringRecordId') }})
    status: Optional[shared_usagerecordresultstatus_enum.UsageRecordResultStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    usage_record: Optional[shared_usagerecord.UsageRecord] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageRecord') }})
    
