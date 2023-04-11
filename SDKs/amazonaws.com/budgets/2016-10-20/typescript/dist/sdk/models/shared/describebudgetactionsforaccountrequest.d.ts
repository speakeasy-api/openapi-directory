import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeBudgetActionsForAccountRequest extends SpeakeasyBase {
    /**
     * The account ID of the user. It's a 12-digit number.
     */
    accountId: string;
    /**
     *  An integer that represents how many entries a paginated response contains. The maximum is 100.
     */
    maxResults?: number;
    /**
     *  A generic string.
     */
    nextToken?: string;
}
