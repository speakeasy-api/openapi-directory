import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchlogslogdelivery as shared_cloudwatchlogslogdelivery
from ..shared import firehoselogdelivery as shared_firehoselogdelivery
from ..shared import s3logdelivery as shared_s3logdelivery


@dataclass_json
@dataclasses.dataclass
class WorkerLogDelivery:
    r"""WorkerLogDelivery
    Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
    """
    
    cloud_watch_logs: Optional[shared_cloudwatchlogslogdelivery.CloudWatchLogsLogDelivery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogs') }})
    firehose: Optional[shared_firehoselogdelivery.FirehoseLogDelivery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firehose') }})
    s3: Optional[shared_s3logdelivery.S3LogDelivery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3') }})
    
