import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import formtabledefinition as shared_formtabledefinition
from ..shared import tablerowresult as shared_tablerowresult


@dataclass_json
@dataclasses.dataclass
class TableResult:
    r"""TableResult
    The result of reading a table via OCR from a form
    """
    
    table_definition: Optional[shared_formtabledefinition.FormTableDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableDefinition') }})
    table_rows_result: Optional[list[shared_tablerowresult.TableRowResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableRowsResult') }})
    
