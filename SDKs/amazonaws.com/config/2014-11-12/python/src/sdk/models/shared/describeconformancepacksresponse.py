import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conformancepackdetail as shared_conformancepackdetail


@dataclass_json
@dataclasses.dataclass
class DescribeConformancePacksResponse:
    conformance_pack_details: Optional[list[shared_conformancepackdetail.ConformancePackDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackDetails') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
