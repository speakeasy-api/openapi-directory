import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entity as shared_entity


@dataclass_json
@dataclasses.dataclass
class BatchDetectEntitiesItemResult:
    r"""BatchDetectEntitiesItemResult
    The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
    """
    
    entities: Optional[list[shared_entity.Entity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entities') }})
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Index') }})
    
