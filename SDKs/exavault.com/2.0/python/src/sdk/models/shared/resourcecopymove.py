import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resource as shared_resource


@dataclass_json
@dataclasses.dataclass
class ResourceCopyMove:
    r"""ResourceCopyMove
    Resource which was successfully copied or moved.
    """
    
    data: Optional[shared_resource.Resource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
