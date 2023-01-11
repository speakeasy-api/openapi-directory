import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import cloudwatchdestination as shared_cloudwatchdestination
from ..shared import kinesisfirehosedestination as shared_kinesisfirehosedestination
from ..shared import eventtype_enum as shared_eventtype_enum
from ..shared import snsdestination as shared_snsdestination


@dataclasses.dataclass
class EventDestination:
    r"""EventDestination
    <p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    matching_event_types: list[shared_eventtype_enum.EventTypeEnum] = dataclasses.field()
    name: str = dataclasses.field()
    cloud_watch_destination: Optional[shared_cloudwatchdestination.CloudWatchDestination] = dataclasses.field(default=None)
    enabled: Optional[bool] = dataclasses.field(default=None)
    kinesis_firehose_destination: Optional[shared_kinesisfirehosedestination.KinesisFirehoseDestination] = dataclasses.field(default=None)
    sns_destination: Optional[shared_snsdestination.SnsDestination] = dataclasses.field(default=None)
    
