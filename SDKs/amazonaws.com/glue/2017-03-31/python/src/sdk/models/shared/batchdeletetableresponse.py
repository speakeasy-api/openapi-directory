import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tableerror as shared_tableerror


@dataclass_json
@dataclasses.dataclass
class BatchDeleteTableResponse:
    errors: Optional[list[shared_tableerror.TableError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    
