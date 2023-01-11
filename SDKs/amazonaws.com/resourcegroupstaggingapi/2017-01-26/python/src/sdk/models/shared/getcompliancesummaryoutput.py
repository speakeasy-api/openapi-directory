import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import summary as shared_summary


@dataclass_json
@dataclasses.dataclass
class GetComplianceSummaryOutput:
    pagination_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaginationToken') }})
    summary_list: Optional[list[shared_summary.Summary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SummaryList') }})
    
