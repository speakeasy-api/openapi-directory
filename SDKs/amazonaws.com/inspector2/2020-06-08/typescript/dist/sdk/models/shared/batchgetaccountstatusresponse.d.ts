import { SpeakeasyBase } from "../../../internal/utils";
import { AccountState } from "./accountstate";
import { FailedAccount } from "./failedaccount";
/**
 * Success
 */
export declare class BatchGetAccountStatusResponse extends SpeakeasyBase {
    accounts: AccountState[];
    failedAccounts?: FailedAccount[];
}
