import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribute as shared_attribute


@dataclass_json
@dataclasses.dataclass
class PutAttributesResponse:
    attributes: Optional[list[shared_attribute.Attribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    
