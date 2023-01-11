import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchdeleteimportdataerrorcode_enum as shared_batchdeleteimportdataerrorcode_enum


@dataclass_json
@dataclasses.dataclass
class BatchDeleteImportDataError:
    r"""BatchDeleteImportDataError
    Error messages returned for each import task that you deleted as a response for this command.
    """
    
    error_code: Optional[shared_batchdeleteimportdataerrorcode_enum.BatchDeleteImportDataErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    import_task_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importTaskId') }})
    
