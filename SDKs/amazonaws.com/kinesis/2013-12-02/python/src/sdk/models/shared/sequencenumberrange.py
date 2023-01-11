import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SequenceNumberRange:
    r"""SequenceNumberRange
    The range of possible sequence numbers for the shard.
    """
    
    starting_sequence_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartingSequenceNumber') }})
    ending_sequence_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndingSequenceNumber') }})
    
