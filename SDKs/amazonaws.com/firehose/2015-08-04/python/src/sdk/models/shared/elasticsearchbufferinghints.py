import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ElasticsearchBufferingHints:
    r"""ElasticsearchBufferingHints
    Describes the buffering to perform before delivering data to the Amazon ES destination.
    """
    
    interval_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntervalInSeconds') }})
    size_in_m_bs: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeInMBs') }})
    
