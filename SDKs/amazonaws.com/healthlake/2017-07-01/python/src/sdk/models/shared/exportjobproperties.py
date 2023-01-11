import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobstatus_enum as shared_jobstatus_enum
from ..shared import outputdataconfig as shared_outputdataconfig


@dataclass_json
@dataclasses.dataclass
class ExportJobProperties:
    r"""ExportJobProperties
    The properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
    """
    
    datastore_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreId') }})
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    job_status: shared_jobstatus_enum.JobStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    output_data_config: shared_outputdataconfig.OutputDataConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    submit_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubmitTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_access_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
