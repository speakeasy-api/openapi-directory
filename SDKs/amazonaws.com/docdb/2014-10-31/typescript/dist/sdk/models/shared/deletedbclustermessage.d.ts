import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input to <a>DeleteDBCluster</a>.
 */
export declare class DeleteDBClusterMessage extends SpeakeasyBase {
    dbClusterIdentifier: string;
    finalDBSnapshotIdentifier?: string;
    skipFinalSnapshot?: boolean;
}
