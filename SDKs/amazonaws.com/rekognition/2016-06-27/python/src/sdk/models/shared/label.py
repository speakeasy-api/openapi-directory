import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instance as shared_instance
from ..shared import parent as shared_parent


@dataclass_json
@dataclasses.dataclass
class Label:
    r"""Label
    <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p>
    """
    
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    instances: Optional[list[shared_instance.Instance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instances') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    parents: Optional[list[shared_parent.Parent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parents') }})
    
