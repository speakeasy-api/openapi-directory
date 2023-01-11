import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ResourceSummary:
    r"""ResourceSummary
    A summary of a resource available on the device.
    """
    
    resource_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
