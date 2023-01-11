import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import samplevalue as shared_samplevalue


@dataclass_json
@dataclasses.dataclass
class SlotTypeValue:
    r"""SlotTypeValue
    Each slot type can have a set of values. Each <code>SlotTypeValue</code> represents a value that the slot type can take.
    """
    
    sample_value: Optional[shared_samplevalue.SampleValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleValue') }})
    synonyms: Optional[list[shared_samplevalue.SampleValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synonyms') }})
    
