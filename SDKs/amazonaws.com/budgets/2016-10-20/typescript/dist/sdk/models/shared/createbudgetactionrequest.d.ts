import { SpeakeasyBase } from "../../../internal/utils";
import { ActionThreshold } from "./actionthreshold";
import { ActionTypeEnum } from "./actiontypeenum";
import { ApprovalModelEnum } from "./approvalmodelenum";
import { Definition } from "./definition";
import { NotificationTypeEnum } from "./notificationtypeenum";
import { Subscriber } from "./subscriber";
export declare class CreateBudgetActionRequest extends SpeakeasyBase {
    /**
     * The account ID of the user. It's a 12-digit number.
     */
    accountId: string;
    /**
     * The trigger threshold of the action.
     */
    actionThreshold: ActionThreshold;
    actionType: ActionTypeEnum;
    approvalModel: ApprovalModelEnum;
    /**
     *  A string that represents the budget name. The ":" and "\" characters aren't allowed.
     */
    budgetName: string;
    /**
     * Specifies all of the type-specific parameters.
     */
    definition: Definition;
    executionRoleArn: string;
    /**
     *  The type of a notification. It must be ACTUAL or FORECASTED.
     */
    notificationType: NotificationTypeEnum;
    /**
     *  A list of subscribers.
     */
    subscribers: Subscriber[];
}
