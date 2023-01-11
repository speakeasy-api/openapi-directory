import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conformancepackevaluationfilters as shared_conformancepackevaluationfilters


@dataclass_json
@dataclasses.dataclass
class GetConformancePackComplianceDetailsRequest:
    conformance_pack_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackName') }})
    filters: Optional[shared_conformancepackevaluationfilters.ConformancePackEvaluationFilters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
