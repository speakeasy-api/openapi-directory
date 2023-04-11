import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetNotificationsForAccount } from "./budgetnotificationsforaccount";
/**
 * Success
 */
export declare class DescribeBudgetNotificationsForAccountResponse extends SpeakeasyBase {
    budgetNotificationsForAccount?: BudgetNotificationsForAccount[];
    /**
     *  A generic string.
     */
    nextToken?: string;
}
