import { SpeakeasyBase } from "../../../internal/utils";
import { RecoverySnapshot } from "./recoverysnapshot";
/**
 * Success
 */
export declare class DescribeRecoverySnapshotsResponse extends SpeakeasyBase {
    items?: RecoverySnapshot[];
    nextToken?: string;
}
