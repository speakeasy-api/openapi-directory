import { SpeakeasyBase } from "../../../internal/utils";
import { IOUsage } from "./iousage";
import { TimingInformation } from "./timinginformation";
/**
 * Contains the details of the committed transaction.
 */
export declare class CommitTransactionResult extends SpeakeasyBase {
    commitDigest?: string;
    consumedIOs?: IOUsage;
    timingInformation?: TimingInformation;
    transactionId?: string;
}
