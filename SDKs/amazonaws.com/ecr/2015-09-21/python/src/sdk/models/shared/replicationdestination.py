import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ReplicationDestination:
    r"""ReplicationDestination
    An array of objects representing the details of a replication destination.
    """
    
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    registry_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    
