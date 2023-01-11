import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import quantumtaskstatus_enum as shared_quantumtaskstatus_enum


@dataclass_json
@dataclasses.dataclass
class QuantumTaskSummary:
    r"""QuantumTaskSummary
    Includes information about a quantum task.
    """
    
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    device_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceArn') }})
    output_s3_bucket: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputS3Bucket') }})
    output_s3_directory: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputS3Directory') }})
    quantum_task_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantumTaskArn') }})
    shots: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shots') }})
    status: shared_quantumtaskstatus_enum.QuantumTaskStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    ended_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
