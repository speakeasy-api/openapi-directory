import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsDestination } from "./cloudwatchlogsdestination";
import { EventTypeEnum } from "./eventtypeenum";
import { KinesisFirehoseDestination } from "./kinesisfirehosedestination";
import { SnsDestination } from "./snsdestination";
/**
 * <p>Contains information about an event destination.</p> <p>Event destinations are associated with configuration sets, which enable you to publish message sending events to Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS.</p>
 */
export declare class EventDestination extends SpeakeasyBase {
    cloudWatchLogsDestination?: CloudWatchLogsDestination;
    enabled: boolean;
    eventDestinationName: string;
    kinesisFirehoseDestination?: KinesisFirehoseDestination;
    matchingEventTypes: EventTypeEnum[];
    snsDestination?: SnsDestination;
}
