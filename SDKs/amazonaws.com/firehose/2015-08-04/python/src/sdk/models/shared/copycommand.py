import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CopyCommand:
    r"""CopyCommand
    Describes a <code>COPY</code> command for Amazon Redshift.
    """
    
    data_table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataTableName') }})
    copy_options: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyOptions') }})
    data_table_columns: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataTableColumns') }})
    
