import { SpeakeasyBase } from "../../../internal/utils";
import { FreeTrialInfo } from "./freetrialinfo";
/**
 * Information about the Amazon Inspector free trial for an account.
 */
export declare class FreeTrialAccountInfo extends SpeakeasyBase {
    accountId: string;
    freeTrialInfo: FreeTrialInfo[];
}
