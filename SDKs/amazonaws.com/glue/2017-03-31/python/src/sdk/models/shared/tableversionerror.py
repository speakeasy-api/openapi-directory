import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errordetail as shared_errordetail


@dataclass_json
@dataclasses.dataclass
class TableVersionError:
    r"""TableVersionError
    An error record for table-version operations.
    """
    
    error_detail: Optional[shared_errordetail.ErrorDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetail') }})
    table_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    version_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionId') }})
    
