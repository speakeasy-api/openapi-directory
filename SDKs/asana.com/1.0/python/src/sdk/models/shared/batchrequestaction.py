import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BatchRequestActionMethodEnum(str, Enum):
    GET = "get"
    POST = "post"
    PUT = "put"
    DELETE = "delete"
    PATCH = "patch"
    HEAD = "head"


@dataclass_json
@dataclasses.dataclass
class BatchRequestActionOptions:
    r"""BatchRequestActionOptions
    Pagination (`limit` and `offset`) and output options (`fields` or `expand`) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.
    """
    
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    

@dataclass_json
@dataclasses.dataclass
class BatchRequestAction:
    r"""BatchRequestAction
    An action object for use in a batch request.
    """
    
    method: BatchRequestActionMethodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    relative_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relative_path') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    options: Optional[BatchRequestActionOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
