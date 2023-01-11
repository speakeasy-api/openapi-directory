import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateAcceleratorAttributesRequest:
    accelerator_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorArn') }})
    flow_logs_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowLogsEnabled') }})
    flow_logs_s3_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowLogsS3Bucket') }})
    flow_logs_s3_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowLogsS3Prefix') }})
    
