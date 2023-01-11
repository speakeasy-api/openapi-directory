import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cellinput as shared_cellinput
from ..shared import filter as shared_filter


@dataclass_json
@dataclasses.dataclass
class UpsertRowData:
    r"""UpsertRowData
     Data needed to upsert rows in a table as part of a single item in the BatchUpsertTableRows request. 
    """
    
    batch_item_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchItemId') }})
    cells_to_update: dict[str, shared_cellinput.CellInput] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellsToUpdate') }})
    filter: shared_filter.Filter = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    
