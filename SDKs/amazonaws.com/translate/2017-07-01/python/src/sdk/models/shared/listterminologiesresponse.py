import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import terminologyproperties as shared_terminologyproperties


@dataclass_json
@dataclasses.dataclass
class ListTerminologiesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    terminology_properties_list: Optional[list[shared_terminologyproperties.TerminologyProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminologyPropertiesList') }})
    
