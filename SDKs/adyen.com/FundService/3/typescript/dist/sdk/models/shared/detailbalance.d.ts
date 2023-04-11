import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
export declare class DetailBalance extends SpeakeasyBase {
    /**
     * The list of balances held by the account.
     */
    balance?: Amount[];
    /**
     * The list of pending balances held by the account.
     */
    pendingBalance?: Amount[];
}
