import { SpeakeasyBase } from "../../../internal/utils";
import { ActionHistory } from "./actionhistory";
/**
 * Success
 */
export declare class DescribeBudgetActionHistoriesResponse extends SpeakeasyBase {
    actionHistories: ActionHistory[];
    /**
     *  A generic string.
     */
    nextToken?: string;
}
