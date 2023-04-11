import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsDestination } from "./cloudwatchlogsdestination";
import { EventTypeEnum } from "./eventtypeenum";
import { KinesisFirehoseDestination } from "./kinesisfirehosedestination";
import { SnsDestination } from "./snsdestination";
export declare class UpdateEventDestinationRequest extends SpeakeasyBase {
    cloudWatchLogsDestination?: CloudWatchLogsDestination;
    configurationSetName: string;
    enabled?: boolean;
    eventDestinationName: string;
    kinesisFirehoseDestination?: KinesisFirehoseDestination;
    matchingEventTypes?: EventTypeEnum[];
    snsDestination?: SnsDestination;
}
