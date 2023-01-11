import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rate as shared_rate


@dataclass_json
@dataclasses.dataclass
class Resource:
    r"""Resource
    This complex type defines the resource (API method) and the current rate-limit data for that resource.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rates: Optional[list[shared_rate.Rate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rates') }})
    
