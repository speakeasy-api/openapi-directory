import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DataRetrievalRule:
    r"""DataRetrievalRule
    Data retrieval policy rule.
    """
    
    bytes_per_hour: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BytesPerHour') }})
    strategy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Strategy') }})
    
