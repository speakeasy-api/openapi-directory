import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsjobexecutionsrolloutconfig as shared_awsjobexecutionsrolloutconfig
from ..shared import awsjobpresignedurlconfig as shared_awsjobpresignedurlconfig
from ..shared import errorinfo as shared_errorinfo
from ..shared import otaupdatefile as shared_otaupdatefile
from ..shared import otaupdatestatus_enum as shared_otaupdatestatus_enum
from ..shared import protocol_enum as shared_protocol_enum
from ..shared import targetselection_enum as shared_targetselection_enum


@dataclass_json
@dataclasses.dataclass
class OtaUpdateInfo:
    r"""OtaUpdateInfo
    Information about an OTA update.
    """
    
    additional_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalParameters') }})
    aws_iot_job_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsIotJobArn') }})
    aws_iot_job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsIotJobId') }})
    aws_job_executions_rollout_config: Optional[shared_awsjobexecutionsrolloutconfig.AwsJobExecutionsRolloutConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsJobExecutionsRolloutConfig') }})
    aws_job_presigned_url_config: Optional[shared_awsjobpresignedurlconfig.AwsJobPresignedURLConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsJobPresignedUrlConfig') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_info: Optional[shared_errorinfo.ErrorInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorInfo') }})
    last_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ota_update_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdateArn') }})
    ota_update_files: Optional[list[shared_otaupdatefile.OtaUpdateFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdateFiles') }})
    ota_update_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdateId') }})
    ota_update_status: Optional[shared_otaupdatestatus_enum.OtaUpdateStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdateStatus') }})
    protocols: Optional[list[shared_protocol_enum.ProtocolEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocols') }})
    target_selection: Optional[shared_targetselection_enum.TargetSelectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSelection') }})
    targets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    
