import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cellinput as shared_cellinput


@dataclass_json
@dataclasses.dataclass
class CreateRowData:
    r"""CreateRowData
     Data needed to create a single row in a table as part of the BatchCreateTableRows request. 
    """
    
    batch_item_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchItemId') }})
    cells_to_create: dict[str, shared_cellinput.CellInput] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellsToCreate') }})
    
