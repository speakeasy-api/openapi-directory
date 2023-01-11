import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobupdate as shared_jobupdate


@dataclass_json
@dataclasses.dataclass
class UpdateJobRequest:
    job_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    job_update: shared_jobupdate.JobUpdate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobUpdate') }})
    
