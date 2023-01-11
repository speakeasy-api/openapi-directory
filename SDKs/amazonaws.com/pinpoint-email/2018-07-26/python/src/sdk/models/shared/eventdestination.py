import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchdestination as shared_cloudwatchdestination
from ..shared import kinesisfirehosedestination as shared_kinesisfirehosedestination
from ..shared import eventtype_enum as shared_eventtype_enum
from ..shared import pinpointdestination as shared_pinpointdestination
from ..shared import snsdestination as shared_snsdestination


@dataclass_json
@dataclasses.dataclass
class EventDestination:
    r"""EventDestination
    In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
    """
    
    matching_event_types: list[shared_eventtype_enum.EventTypeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchingEventTypes') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    cloud_watch_destination: Optional[shared_cloudwatchdestination.CloudWatchDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchDestination') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    kinesis_firehose_destination: Optional[shared_kinesisfirehosedestination.KinesisFirehoseDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseDestination') }})
    pinpoint_destination: Optional[shared_pinpointdestination.PinpointDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PinpointDestination') }})
    sns_destination: Optional[shared_snsdestination.SnsDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsDestination') }})
    
