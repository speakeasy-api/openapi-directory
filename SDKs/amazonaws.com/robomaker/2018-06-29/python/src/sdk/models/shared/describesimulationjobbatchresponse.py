import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchpolicy as shared_batchpolicy
from ..shared import simulationjobsummary as shared_simulationjobsummary
from ..shared import failedcreatesimulationjobrequest as shared_failedcreatesimulationjobrequest
from ..shared import simulationjobbatcherrorcode_enum as shared_simulationjobbatcherrorcode_enum
from ..shared import simulationjobrequest as shared_simulationjobrequest
from ..shared import simulationjobbatchstatus_enum as shared_simulationjobbatchstatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribeSimulationJobBatchResponse:
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    batch_policy: Optional[shared_batchpolicy.BatchPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchPolicy') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_requests: Optional[list[shared_simulationjobsummary.SimulationJobSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdRequests') }})
    failed_requests: Optional[list[shared_failedcreatesimulationjobrequest.FailedCreateSimulationJobRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedRequests') }})
    failure_code: Optional[shared_simulationjobbatcherrorcode_enum.SimulationJobBatchErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCode') }})
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    last_updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pending_requests: Optional[list[shared_simulationjobrequest.SimulationJobRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingRequests') }})
    status: Optional[shared_simulationjobbatchstatus_enum.SimulationJobBatchStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
