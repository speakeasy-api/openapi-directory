import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exclusion as shared_exclusion
from ..shared import faileditemdetails as shared_faileditemdetails


@dataclass_json
@dataclasses.dataclass
class DescribeExclusionsResponse:
    exclusions: dict[str, shared_exclusion.Exclusion] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusions') }})
    failed_items: dict[str, shared_faileditemdetails.FailedItemDetails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedItems') }})
    
