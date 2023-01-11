import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import abortconfig as shared_abortconfig
from ..shared import jobexecutionsrolloutconfig as shared_jobexecutionsrolloutconfig
from ..shared import presignedurlconfig as shared_presignedurlconfig
from ..shared import timeoutconfig as shared_timeoutconfig


@dataclass_json
@dataclasses.dataclass
class DescribeJobTemplateResponse:
    abort_config: Optional[shared_abortconfig.AbortConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortConfig') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    document: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    document_source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentSource') }})
    job_executions_rollout_config: Optional[shared_jobexecutionsrolloutconfig.JobExecutionsRolloutConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobExecutionsRolloutConfig') }})
    job_template_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTemplateArn') }})
    job_template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTemplateId') }})
    presigned_url_config: Optional[shared_presignedurlconfig.PresignedURLConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presignedUrlConfig') }})
    timeout_config: Optional[shared_timeoutconfig.TimeoutConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutConfig') }})
    
