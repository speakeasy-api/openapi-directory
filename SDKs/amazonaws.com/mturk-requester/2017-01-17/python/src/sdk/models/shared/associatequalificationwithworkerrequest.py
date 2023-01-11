import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssociateQualificationWithWorkerRequest:
    qualification_type_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationTypeId') }})
    worker_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerId') }})
    integer_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegerValue') }})
    send_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendNotification') }})
    
