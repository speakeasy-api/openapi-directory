import { SpeakeasyBase } from "../../../internal/utils";
import { FreeTrialAccountInfo } from "./freetrialaccountinfo";
import { FreeTrialInfoError } from "./freetrialinfoerror";
/**
 * Success
 */
export declare class BatchGetFreeTrialInfoResponse extends SpeakeasyBase {
    accounts: FreeTrialAccountInfo[];
    failedAccounts: FreeTrialInfoError[];
}
