import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errordetail as shared_errordetail


@dataclass_json
@dataclasses.dataclass
class BatchDeleteConnectionResponse:
    errors: Optional[dict[str, shared_errordetail.ErrorDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    succeeded: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Succeeded') }})
    
