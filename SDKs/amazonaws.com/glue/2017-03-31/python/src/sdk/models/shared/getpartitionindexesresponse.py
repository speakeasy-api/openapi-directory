import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partitionindexdescriptor as shared_partitionindexdescriptor


@dataclass_json
@dataclasses.dataclass
class GetPartitionIndexesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    partition_index_descriptor_list: Optional[list[shared_partitionindexdescriptor.PartitionIndexDescriptor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionIndexDescriptorList') }})
    
