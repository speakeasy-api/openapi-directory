import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import systeminstancedescription as shared_systeminstancedescription


@dataclass_json
@dataclasses.dataclass
class GetSystemInstanceResponse:
    description: Optional[shared_systeminstancedescription.SystemInstanceDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
