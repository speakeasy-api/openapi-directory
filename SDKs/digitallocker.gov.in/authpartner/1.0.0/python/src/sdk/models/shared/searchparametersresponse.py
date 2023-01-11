import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SearchParametersResponse:
    example: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('example') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    paramname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paramname') }})
    valuelist: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valuelist') }})
    
