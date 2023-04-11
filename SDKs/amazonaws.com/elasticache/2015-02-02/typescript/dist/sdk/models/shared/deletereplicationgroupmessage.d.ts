import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>DeleteReplicationGroup</code> operation.
 */
export declare class DeleteReplicationGroupMessage extends SpeakeasyBase {
    finalSnapshotIdentifier?: string;
    replicationGroupId: string;
    retainPrimaryCluster?: boolean;
}
