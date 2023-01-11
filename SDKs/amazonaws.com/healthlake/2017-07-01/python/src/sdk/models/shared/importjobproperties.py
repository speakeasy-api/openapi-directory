import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputdataconfig as shared_inputdataconfig
from ..shared import outputdataconfig as shared_outputdataconfig
from ..shared import jobstatus_enum as shared_jobstatus_enum


@dataclass_json
@dataclasses.dataclass
class ImportJobProperties:
    r"""ImportJobProperties
    Displays the properties of the import job, including the ID, Arn, Name, and the status of the Data Store.
    """
    
    datastore_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreId') }})
    input_data_config: shared_inputdataconfig.InputDataConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    job_status: shared_jobstatus_enum.JobStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    submit_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubmitTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_access_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    job_output_data_config: Optional[shared_outputdataconfig.OutputDataConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobOutputDataConfig') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
