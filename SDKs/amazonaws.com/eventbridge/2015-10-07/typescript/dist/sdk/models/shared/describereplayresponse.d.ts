import { SpeakeasyBase } from "../../../internal/utils";
import { ReplayDestination } from "./replaydestination";
import { ReplayStateEnum } from "./replaystateenum";
/**
 * Success
 */
export declare class DescribeReplayResponse extends SpeakeasyBase {
    description?: string;
    destination?: ReplayDestination;
    eventEndTime?: Date;
    eventLastReplayedTime?: Date;
    eventSourceArn?: string;
    eventStartTime?: Date;
    replayArn?: string;
    replayEndTime?: Date;
    replayName?: string;
    replayStartTime?: Date;
    state?: ReplayStateEnum;
    stateReason?: string;
}
