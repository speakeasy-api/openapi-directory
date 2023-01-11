import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datastorepartition as shared_datastorepartition


@dataclass_json
@dataclasses.dataclass
class DatastorePartitions:
    r"""DatastorePartitions
     Contains information about the partition dimensions in a data store. 
    """
    
    partitions: Optional[list[shared_datastorepartition.DatastorePartition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitions') }})
    
