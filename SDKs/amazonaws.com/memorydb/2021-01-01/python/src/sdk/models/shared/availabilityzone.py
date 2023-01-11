import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AvailabilityZone:
    r"""AvailabilityZone
    Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz).
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
