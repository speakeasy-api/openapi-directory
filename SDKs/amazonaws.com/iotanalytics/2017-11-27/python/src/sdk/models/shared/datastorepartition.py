import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partition as shared_partition
from ..shared import timestamppartition as shared_timestamppartition


@dataclass_json
@dataclasses.dataclass
class DatastorePartition:
    r"""DatastorePartition
     A single dimension to partition a data store. The dimension must be an <code>AttributePartition</code> or a <code>TimestampPartition</code>. 
    """
    
    attribute_partition: Optional[shared_partition.Partition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributePartition') }})
    timestamp_partition: Optional[shared_timestamppartition.TimestampPartition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampPartition') }})
    
