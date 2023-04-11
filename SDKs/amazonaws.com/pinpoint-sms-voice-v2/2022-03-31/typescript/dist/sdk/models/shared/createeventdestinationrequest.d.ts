import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsDestination } from "./cloudwatchlogsdestination";
import { EventTypeEnum } from "./eventtypeenum";
import { KinesisFirehoseDestination } from "./kinesisfirehosedestination";
import { SnsDestination } from "./snsdestination";
export declare class CreateEventDestinationRequest extends SpeakeasyBase {
    clientToken?: string;
    cloudWatchLogsDestination?: CloudWatchLogsDestination;
    configurationSetName: string;
    eventDestinationName: string;
    kinesisFirehoseDestination?: KinesisFirehoseDestination;
    matchingEventTypes: EventTypeEnum[];
    snsDestination?: SnsDestination;
}
