import { SpeakeasyBase } from "../../../internal/utils";
import { ThresholdTypeEnum } from "./thresholdtypeenum";
/**
 * The trigger threshold of the action.
 */
export declare class ActionThreshold extends SpeakeasyBase {
    /**
     *  The type of threshold for a notification.
     */
    actionThresholdType: ThresholdTypeEnum;
    /**
     *  The threshold of a notification.
     */
    actionThresholdValue: number;
}
