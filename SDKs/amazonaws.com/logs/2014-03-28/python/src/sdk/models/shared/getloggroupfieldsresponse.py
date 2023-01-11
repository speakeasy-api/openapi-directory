import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loggroupfield as shared_loggroupfield


@dataclass_json
@dataclasses.dataclass
class GetLogGroupFieldsResponse:
    log_group_fields: Optional[list[shared_loggroupfield.LogGroupField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupFields') }})
    
