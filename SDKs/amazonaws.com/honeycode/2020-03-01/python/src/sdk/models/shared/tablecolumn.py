import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import format_enum as shared_format_enum


@dataclass_json
@dataclasses.dataclass
class TableColumn:
    r"""TableColumn
    An object that contains attributes about a single column in a table
    """
    
    format: Optional[shared_format_enum.FormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    table_column_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableColumnId') }})
    table_column_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableColumnName') }})
    
