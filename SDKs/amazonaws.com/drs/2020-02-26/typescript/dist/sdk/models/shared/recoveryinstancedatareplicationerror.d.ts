import { SpeakeasyBase } from "../../../internal/utils";
import { FailbackReplicationErrorEnum } from "./failbackreplicationerrorenum";
/**
 * Error in data replication.
 */
export declare class RecoveryInstanceDataReplicationError extends SpeakeasyBase {
    error?: FailbackReplicationErrorEnum;
    rawError?: string;
}
