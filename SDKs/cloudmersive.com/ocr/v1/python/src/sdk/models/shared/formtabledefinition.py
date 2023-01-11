import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import formtablecolumndefinition as shared_formtablecolumndefinition


@dataclass_json
@dataclasses.dataclass
class FormTableDefinition:
    r"""FormTableDefinition
    Definition of a form table for OCR data extraction from images
    """
    
    column_definitions: Optional[list[shared_formtablecolumndefinition.FormTableColumnDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnDefinitions') }})
    table_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableID') }})
    target_row_height_relative: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetRowHeight_Relative') }})
    target_table_height_relative: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTableHeight_Relative') }})
    
