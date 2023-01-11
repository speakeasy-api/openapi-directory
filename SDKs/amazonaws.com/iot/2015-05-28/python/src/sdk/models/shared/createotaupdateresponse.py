import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import otaupdatestatus_enum as shared_otaupdatestatus_enum


@dataclass_json
@dataclasses.dataclass
class CreateOtaUpdateResponse:
    aws_iot_job_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsIotJobArn') }})
    aws_iot_job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsIotJobId') }})
    ota_update_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdateArn') }})
    ota_update_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdateId') }})
    ota_update_status: Optional[shared_otaupdatestatus_enum.OtaUpdateStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdateStatus') }})
    
