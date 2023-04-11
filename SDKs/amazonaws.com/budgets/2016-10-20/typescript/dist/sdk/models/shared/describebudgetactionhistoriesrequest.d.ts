import { SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";
export declare class DescribeBudgetActionHistoriesRequest extends SpeakeasyBase {
    /**
     * The account ID of the user. It's a 12-digit number.
     */
    accountId: string;
    actionId: string;
    /**
     *  A string that represents the budget name. The ":" and "\" characters aren't allowed.
     */
    budgetName: string;
    /**
     *  An integer that represents how many entries a paginated response contains. The maximum is 100.
     */
    maxResults?: number;
    /**
     *  A generic string.
     */
    nextToken?: string;
    /**
     * The period of time that's covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.
     */
    timePeriod?: TimePeriod;
}
