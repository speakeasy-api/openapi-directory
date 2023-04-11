import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
/**
 * Success
 */
export declare class DescribeBudgetActionsForAccountResponse extends SpeakeasyBase {
    actions: Action[];
    /**
     *  A generic string.
     */
    nextToken?: string;
}
