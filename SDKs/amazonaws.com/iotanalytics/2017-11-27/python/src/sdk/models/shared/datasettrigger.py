import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import triggeringdataset as shared_triggeringdataset
from ..shared import schedule as shared_schedule


@dataclass_json
@dataclasses.dataclass
class DatasetTrigger:
    r"""DatasetTrigger
    The <code>DatasetTrigger</code> that specifies when the dataset is automatically updated.
    """
    
    dataset: Optional[shared_triggeringdataset.TriggeringDataset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    schedule: Optional[shared_schedule.Schedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    
