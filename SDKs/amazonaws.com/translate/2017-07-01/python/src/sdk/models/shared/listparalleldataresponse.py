import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paralleldataproperties as shared_paralleldataproperties


@dataclass_json
@dataclasses.dataclass
class ListParallelDataResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    parallel_data_properties_list: Optional[list[shared_paralleldataproperties.ParallelDataProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelDataPropertiesList') }})
    
