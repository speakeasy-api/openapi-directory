import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteRegionAction:
    r"""DeleteRegionAction
    Defines the information about the Region you're deleting from your replication set.
    """
    
    region_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionName') }})
    
