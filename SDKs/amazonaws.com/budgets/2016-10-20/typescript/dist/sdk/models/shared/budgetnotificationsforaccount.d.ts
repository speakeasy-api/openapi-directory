import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 *  The budget name and associated notifications for an account.
 */
export declare class BudgetNotificationsForAccount extends SpeakeasyBase {
    /**
     *  A string that represents the budget name. The ":" and "\" characters aren't allowed.
     */
    budgetName?: string;
    /**
     *  A list of notifications.
     */
    notifications?: Notification[];
}
