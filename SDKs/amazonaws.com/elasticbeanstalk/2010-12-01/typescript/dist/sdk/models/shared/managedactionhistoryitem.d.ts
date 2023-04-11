import { SpeakeasyBase } from "../../../internal/utils";
import { ActionHistoryStatusEnum } from "./actionhistorystatusenum";
import { ActionTypeEnum } from "./actiontypeenum";
import { FailureTypeEnum } from "./failuretypeenum";
/**
 * The record of a completed or failed managed action.
 */
export declare class ManagedActionHistoryItem extends SpeakeasyBase {
    actionDescription?: string;
    actionId?: string;
    actionType?: ActionTypeEnum;
    executedTime?: Date;
    failureDescription?: string;
    failureType?: FailureTypeEnum;
    finishedTime?: Date;
    status?: ActionHistoryStatusEnum;
}
