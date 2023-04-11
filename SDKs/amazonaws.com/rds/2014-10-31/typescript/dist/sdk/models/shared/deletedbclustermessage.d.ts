import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class DeleteDBClusterMessage extends SpeakeasyBase {
    dbClusterIdentifier: string;
    finalDBSnapshotIdentifier?: string;
    skipFinalSnapshot?: boolean;
}
