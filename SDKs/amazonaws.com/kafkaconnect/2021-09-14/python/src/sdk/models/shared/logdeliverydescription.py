import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workerlogdeliverydescription as shared_workerlogdeliverydescription


@dataclass_json
@dataclasses.dataclass
class LogDeliveryDescription:
    r"""LogDeliveryDescription
    The description of the log delivery settings.
    """
    
    worker_log_delivery: Optional[shared_workerlogdeliverydescription.WorkerLogDeliveryDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerLogDelivery') }})
    
