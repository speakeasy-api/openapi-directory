import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usagerecordresult as shared_usagerecordresult
from ..shared import usagerecord as shared_usagerecord


@dataclass_json
@dataclasses.dataclass
class BatchMeterUsageResult:
    r"""BatchMeterUsageResult
    Contains the UsageRecords processed by BatchMeterUsage and any records that have failed due to transient error.
    """
    
    results: Optional[list[shared_usagerecordresult.UsageRecordResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    unprocessed_records: Optional[list[shared_usagerecord.UsageRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedRecords') }})
    
