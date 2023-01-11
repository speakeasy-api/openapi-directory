import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import faileditemdetails as shared_faileditemdetails
from ..shared import finding as shared_finding


@dataclass_json
@dataclasses.dataclass
class DescribeFindingsResponse:
    failed_items: dict[str, shared_faileditemdetails.FailedItemDetails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedItems') }})
    findings: list[shared_finding.Finding] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findings') }})
    
