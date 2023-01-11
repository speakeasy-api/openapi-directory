import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import percentpair as shared_percentpair


@dataclass_json
@dataclasses.dataclass
class GetPercentilesResponse:
    percentiles: Optional[list[shared_percentpair.PercentPair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentiles') }})
    
