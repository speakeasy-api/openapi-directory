import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { FailedAccount } from "./failedaccount";
/**
 * Success
 */
export declare class EnableResponse extends SpeakeasyBase {
    accounts: Account[];
    failedAccounts?: FailedAccount[];
}
