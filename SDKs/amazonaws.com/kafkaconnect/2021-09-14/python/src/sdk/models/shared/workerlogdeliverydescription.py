import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchlogslogdeliverydescription as shared_cloudwatchlogslogdeliverydescription
from ..shared import firehoselogdeliverydescription as shared_firehoselogdeliverydescription
from ..shared import s3logdeliverydescription as shared_s3logdeliverydescription


@dataclass_json
@dataclasses.dataclass
class WorkerLogDeliveryDescription:
    r"""WorkerLogDeliveryDescription
    Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
    """
    
    cloud_watch_logs: Optional[shared_cloudwatchlogslogdeliverydescription.CloudWatchLogsLogDeliveryDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogs') }})
    firehose: Optional[shared_firehoselogdeliverydescription.FirehoseLogDeliveryDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firehose') }})
    s3: Optional[shared_s3logdeliverydescription.S3LogDeliveryDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3') }})
    
