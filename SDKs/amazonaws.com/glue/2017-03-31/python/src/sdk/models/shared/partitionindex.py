import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PartitionIndex:
    r"""PartitionIndex
    A structure for a partition index.
    """
    
    index_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    keys: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keys') }})
    
