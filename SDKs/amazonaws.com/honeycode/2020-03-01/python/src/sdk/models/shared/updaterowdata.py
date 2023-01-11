import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cellinput as shared_cellinput


@dataclass_json
@dataclasses.dataclass
class UpdateRowData:
    r"""UpdateRowData
     Data needed to create a single row in a table as part of the BatchCreateTableRows request. 
    """
    
    cells_to_update: dict[str, shared_cellinput.CellInput] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellsToUpdate') }})
    row_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowId') }})
    
