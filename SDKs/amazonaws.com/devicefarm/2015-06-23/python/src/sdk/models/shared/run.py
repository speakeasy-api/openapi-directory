import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billingmethod_enum as shared_billingmethod_enum
from ..shared import counters as shared_counters
from ..shared import customerartifactpaths as shared_customerartifactpaths
from ..shared import deviceminutes as shared_deviceminutes
from ..shared import deviceselectionresult as shared_deviceselectionresult
from ..shared import location as shared_location
from ..shared import networkprofile as shared_networkprofile
from ..shared import deviceplatform_enum as shared_deviceplatform_enum
from ..shared import radios as shared_radios
from ..shared import executionresult_enum as shared_executionresult_enum
from ..shared import executionresultcode_enum as shared_executionresultcode_enum
from ..shared import executionstatus_enum as shared_executionstatus_enum
from ..shared import testtype_enum as shared_testtype_enum


@dataclass_json
@dataclasses.dataclass
class Run:
    r"""Run
    Represents a test run on a set of devices with a given app package, test parameters, and so on.
    """
    
    app_upload: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appUpload') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    billing_method: Optional[shared_billingmethod_enum.BillingMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingMethod') }})
    completed_jobs: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedJobs') }})
    counters: Optional[shared_counters.Counters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counters') }})
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer_artifact_paths: Optional[shared_customerartifactpaths.CustomerArtifactPaths] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerArtifactPaths') }})
    device_minutes: Optional[shared_deviceminutes.DeviceMinutes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMinutes') }})
    device_pool_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePoolArn') }})
    device_selection_result: Optional[shared_deviceselectionresult.DeviceSelectionResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSelectionResult') }})
    event_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventCount') }})
    job_timeout_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTimeoutMinutes') }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    location: Optional[shared_location.Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_profile: Optional[shared_networkprofile.NetworkProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkProfile') }})
    parsing_result_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parsingResultUrl') }})
    platform: Optional[shared_deviceplatform_enum.DevicePlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    radios: Optional[shared_radios.Radios] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radios') }})
    result: Optional[shared_executionresult_enum.ExecutionResultEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    result_code: Optional[shared_executionresultcode_enum.ExecutionResultCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultCode') }})
    seed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seed') }})
    skip_app_resign: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipAppResign') }})
    started: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared_executionstatus_enum.ExecutionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stopped: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopped'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    test_spec_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSpecArn') }})
    total_jobs: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalJobs') }})
    type: Optional[shared_testtype_enum.TestTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    web_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webUrl') }})
    
