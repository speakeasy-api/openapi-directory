import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
/**
 * Success
 */
export declare class DeleteBudgetActionResponse extends SpeakeasyBase {
    /**
     * The account ID of the user. It's a 12-digit number.
     */
    accountId: string;
    /**
     * A budget action resource.
     */
    action: Action;
    /**
     *  A string that represents the budget name. The ":" and "\" characters aren't allowed.
     */
    budgetName: string;
}
