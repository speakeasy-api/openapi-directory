import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import container as shared_container


@dataclass_json
@dataclasses.dataclass
class DescribeContainerOutput:
    container: Optional[shared_container.Container] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    
