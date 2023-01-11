import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TimestampPartition:
    r"""TimestampPartition
     A partition dimension defined by a timestamp attribute. 
    """
    
    attribute_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeName') }})
    timestamp_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampFormat') }})
    
