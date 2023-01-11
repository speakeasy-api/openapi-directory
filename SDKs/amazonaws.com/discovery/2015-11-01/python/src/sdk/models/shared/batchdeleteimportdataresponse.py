import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchdeleteimportdataerror as shared_batchdeleteimportdataerror


@dataclass_json
@dataclasses.dataclass
class BatchDeleteImportDataResponse:
    errors: Optional[list[shared_batchdeleteimportdataerror.BatchDeleteImportDataError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
