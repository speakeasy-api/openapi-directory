import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutRecordInput:
    r"""PutRecordInput
    Represents the input for <code>PutRecord</code>.
    """
    
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    partition_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionKey') }})
    stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    explicit_hash_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExplicitHashKey') }})
    sequence_number_for_ordering: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SequenceNumberForOrdering') }})
    
