import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutRecordsRequestEntry:
    r"""PutRecordsRequestEntry
    Represents the output for <code>PutRecords</code>.
    """
    
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    partition_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionKey') }})
    explicit_hash_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExplicitHashKey') }})
    
