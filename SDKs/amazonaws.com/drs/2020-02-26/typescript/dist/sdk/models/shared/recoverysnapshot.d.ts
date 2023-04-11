import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A snapshot of a Source Server used during recovery.
 */
export declare class RecoverySnapshot extends SpeakeasyBase {
    ebsSnapshots?: string[];
    expectedTimestamp: string;
    snapshotID: string;
    sourceServerID: string;
    timestamp?: string;
}
