import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchinferencejobconfig as shared_batchinferencejobconfig
from ..shared import batchinferencejobinput as shared_batchinferencejobinput
from ..shared import batchinferencejoboutput as shared_batchinferencejoboutput


@dataclass_json
@dataclasses.dataclass
class BatchInferenceJob:
    r"""BatchInferenceJob
    Contains information on a batch inference job.
    """
    
    batch_inference_job_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchInferenceJobArn') }})
    batch_inference_job_config: Optional[shared_batchinferencejobconfig.BatchInferenceJobConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchInferenceJobConfig') }})
    creation_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    filter_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterArn') }})
    job_input: Optional[shared_batchinferencejobinput.BatchInferenceJobInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobInput') }})
    job_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    job_output: Optional[shared_batchinferencejoboutput.BatchInferenceJobOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobOutput') }})
    last_updated_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numResults') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    solution_version_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionVersionArn') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
