import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filterrule as shared_filterrule
from ..shared import options as shared_options
from ..shared import taskexecutionresultdetail as shared_taskexecutionresultdetail
from ..shared import taskexecutionstatus_enum as shared_taskexecutionstatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribeTaskExecutionResponse:
    r"""DescribeTaskExecutionResponse
    DescribeTaskExecutionResponse
    """
    
    bytes_transferred: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BytesTransferred') }})
    bytes_written: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BytesWritten') }})
    estimated_bytes_to_transfer: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EstimatedBytesToTransfer') }})
    estimated_files_to_transfer: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EstimatedFilesToTransfer') }})
    excludes: Optional[list[shared_filterrule.FilterRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Excludes') }})
    files_transferred: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilesTransferred') }})
    includes: Optional[list[shared_filterrule.FilterRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Includes') }})
    options: Optional[shared_options.Options] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    result: Optional[shared_taskexecutionresultdetail.TaskExecutionResultDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared_taskexecutionstatus_enum.TaskExecutionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    task_execution_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskExecutionArn') }})
    
