import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeBudgetNotificationsForAccountRequest extends SpeakeasyBase {
    /**
     * The account ID of the user. It's a 12-digit number.
     */
    accountId: string;
    maxResults?: number;
    /**
     *  A generic string.
     */
    nextToken?: string;
}
