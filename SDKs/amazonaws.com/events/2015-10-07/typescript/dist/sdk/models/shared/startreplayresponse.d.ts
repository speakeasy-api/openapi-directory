import { SpeakeasyBase } from "../../../internal/utils";
import { ReplayStateEnum } from "./replaystateenum";
/**
 * Success
 */
export declare class StartReplayResponse extends SpeakeasyBase {
    replayArn?: string;
    replayStartTime?: Date;
    state?: ReplayStateEnum;
    stateReason?: string;
}
