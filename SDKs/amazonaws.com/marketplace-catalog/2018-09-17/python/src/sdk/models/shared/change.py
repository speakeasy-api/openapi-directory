import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entity as shared_entity


@dataclass_json
@dataclasses.dataclass
class Change:
    r"""Change
    An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>.
    """
    
    change_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeType') }})
    details: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Details') }})
    entity: shared_entity.Entity = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entity') }})
    change_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeName') }})
    
