import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcevalue as shared_resourcevalue
from ..shared import staticvalue as shared_staticvalue


@dataclass_json
@dataclasses.dataclass
class RemediationParameterValue:
    resource_value: Optional[shared_resourcevalue.ResourceValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceValue') }})
    static_value: Optional[shared_staticvalue.StaticValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StaticValue') }})
    
