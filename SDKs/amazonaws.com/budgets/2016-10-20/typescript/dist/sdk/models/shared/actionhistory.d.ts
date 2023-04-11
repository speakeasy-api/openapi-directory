import { SpeakeasyBase } from "../../../internal/utils";
import { ActionHistoryDetails } from "./actionhistorydetails";
import { ActionStatusEnum } from "./actionstatusenum";
import { EventTypeEnum } from "./eventtypeenum";
/**
 * The historical records for a budget action.
 */
export declare class ActionHistory extends SpeakeasyBase {
    actionHistoryDetails: ActionHistoryDetails;
    eventType: EventTypeEnum;
    status: ActionStatusEnum;
    /**
     *  A generic time stamp. In Java, it's transformed to a <code>Date</code> object.
     */
    timestamp: Date;
}
