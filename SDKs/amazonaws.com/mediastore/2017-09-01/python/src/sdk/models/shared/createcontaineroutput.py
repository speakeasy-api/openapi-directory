import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import container as shared_container


@dataclass_json
@dataclasses.dataclass
class CreateContainerOutput:
    container: shared_container.Container = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    
