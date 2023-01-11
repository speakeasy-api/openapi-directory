import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AcceleratorAttributes:
    r"""AcceleratorAttributes
    Attributes of an accelerator.
    """
    
    flow_logs_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowLogsEnabled') }})
    flow_logs_s3_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowLogsS3Bucket') }})
    flow_logs_s3_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowLogsS3Prefix') }})
    
