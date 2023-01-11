import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tableversionerror as shared_tableversionerror


@dataclass_json
@dataclasses.dataclass
class BatchDeleteTableVersionResponse:
    errors: Optional[list[shared_tableversionerror.TableVersionError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    
