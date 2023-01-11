import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ColumnImportance:
    r"""ColumnImportance
    <p>A structure containing the column name and column importance score for a column. </p> <p>Column importance helps you understand how columns contribute to your model, by identifying which columns in your records are more important than others.</p>
    """
    
    column_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnName') }})
    importance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Importance') }})
    
