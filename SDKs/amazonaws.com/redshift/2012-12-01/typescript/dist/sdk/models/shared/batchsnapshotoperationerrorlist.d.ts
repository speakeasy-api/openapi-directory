import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the errors returned by a snapshot.
 */
export declare class BatchSnapshotOperationErrorList extends SpeakeasyBase {
    failureCode?: string;
    failureReason?: string;
    snapshotClusterIdentifier?: string;
    snapshotIdentifier?: string;
}
