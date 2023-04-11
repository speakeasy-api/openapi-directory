import { SpeakeasyBase } from "../../../internal/utils";
import { ActionStatusEnum } from "./actionstatusenum";
import { ActionThreshold } from "./actionthreshold";
import { ActionTypeEnum } from "./actiontypeenum";
import { ApprovalModelEnum } from "./approvalmodelenum";
import { Definition } from "./definition";
import { NotificationTypeEnum } from "./notificationtypeenum";
import { Subscriber } from "./subscriber";
/**
 * A budget action resource.
 */
export declare class Action extends SpeakeasyBase {
    actionId: string;
    actionThreshold: ActionThreshold;
    actionType: ActionTypeEnum;
    approvalModel: ApprovalModelEnum;
    /**
     *  A string that represents the budget name. The ":" and "\" characters aren't allowed.
     */
    budgetName: string;
    definition: Definition;
    executionRoleArn: string;
    /**
     *  The type of a notification. It must be ACTUAL or FORECASTED.
     */
    notificationType: NotificationTypeEnum;
    status: ActionStatusEnum;
    /**
     *  A list of subscribers.
     */
    subscribers: Subscriber[];
}
