import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containeroverrides as shared_containeroverrides


@dataclass_json
@dataclasses.dataclass
class NodePropertyOverride:
    r"""NodePropertyOverride
    Object representing any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.
    """
    
    target_nodes: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetNodes') }})
    container_overrides: Optional[shared_containeroverrides.ContainerOverrides] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerOverrides') }})
    
