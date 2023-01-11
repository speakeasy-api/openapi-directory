import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EventBatchingCondition:
    r"""EventBatchingCondition
    Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
    """
    
    batch_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchSize') }})
    batch_window: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchWindow') }})
    
