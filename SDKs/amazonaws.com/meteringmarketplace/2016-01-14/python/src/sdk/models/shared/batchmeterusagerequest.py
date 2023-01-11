import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usagerecord as shared_usagerecord


@dataclass_json
@dataclasses.dataclass
class BatchMeterUsageRequest:
    r"""BatchMeterUsageRequest
    A BatchMeterUsageRequest contains UsageRecords, which indicate quantities of usage within your application.
    """
    
    product_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductCode') }})
    usage_records: list[shared_usagerecord.UsageRecord] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageRecords') }})
    
