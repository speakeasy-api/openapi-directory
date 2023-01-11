import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buildnotdeleted as shared_buildnotdeleted


@dataclass_json
@dataclasses.dataclass
class DeleteBuildBatchOutput:
    builds_deleted: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildsDeleted') }})
    builds_not_deleted: Optional[list[shared_buildnotdeleted.BuildNotDeleted]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildsNotDeleted') }})
    status_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    
