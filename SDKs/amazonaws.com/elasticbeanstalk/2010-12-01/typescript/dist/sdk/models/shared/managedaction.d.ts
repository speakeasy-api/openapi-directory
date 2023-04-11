import { SpeakeasyBase } from "../../../internal/utils";
import { ActionStatusEnum } from "./actionstatusenum";
import { ActionTypeEnum } from "./actiontypeenum";
/**
 * The record of an upcoming or in-progress managed action.
 */
export declare class ManagedAction extends SpeakeasyBase {
    actionDescription?: string;
    actionId?: string;
    actionType?: ActionTypeEnum;
    status?: ActionStatusEnum;
    windowStartTime?: Date;
}
