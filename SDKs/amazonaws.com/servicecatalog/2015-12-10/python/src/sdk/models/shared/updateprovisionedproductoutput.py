import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recorddetail as shared_recorddetail


@dataclass_json
@dataclasses.dataclass
class UpdateProvisionedProductOutput:
    record_detail: Optional[shared_recorddetail.RecordDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordDetail') }})
    
