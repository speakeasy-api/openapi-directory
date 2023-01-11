import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import table as shared_table


@dataclass_json
@dataclasses.dataclass
class TableVersion:
    r"""TableVersion
    Specifies a version of a table.
    """
    
    table: Optional[shared_table.Table] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Table') }})
    version_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionId') }})
    
