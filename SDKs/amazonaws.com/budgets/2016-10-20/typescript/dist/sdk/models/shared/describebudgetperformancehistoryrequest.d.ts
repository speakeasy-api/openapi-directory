import { SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";
export declare class DescribeBudgetPerformanceHistoryRequest extends SpeakeasyBase {
    /**
     * The account ID of the user. It's a 12-digit number.
     */
    accountId: string;
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
    timePeriod?: TimePeriod;
}
