import dataclasses
from typing import Optional
from ..shared import cloudwatchlogsdestinationdetails as shared_cloudwatchlogsdestinationdetails
from ..shared import kinesisfirehosedestinationdetails as shared_kinesisfirehosedestinationdetails


@dataclasses.dataclass
class DestinationDetails:
    r"""DestinationDetails
    Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
    """
    
    cloud_watch_logs_details: Optional[shared_cloudwatchlogsdestinationdetails.CloudWatchLogsDestinationDetails] = dataclasses.field(default=None)
    kinesis_firehose_details: Optional[shared_kinesisfirehosedestinationdetails.KinesisFirehoseDestinationDetails] = dataclasses.field(default=None)
    
