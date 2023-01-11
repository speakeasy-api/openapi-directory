import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ocrphototextelement as shared_ocrphototextelement


@dataclass_json
@dataclasses.dataclass
class TableCellResult:
    r"""TableCellResult
    The recognition result of one cell in one row in a table of a form
    """
    
    cell_values: Optional[list[shared_ocrphototextelement.OcrPhotoTextElement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CellValues') }})
    column_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnID') }})
    
