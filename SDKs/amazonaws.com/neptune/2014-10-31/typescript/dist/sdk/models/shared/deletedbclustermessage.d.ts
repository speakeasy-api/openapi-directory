import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDBClusterMessage extends SpeakeasyBase {
    dbClusterIdentifier: string;
    finalDBSnapshotIdentifier?: string;
    skipFinalSnapshot?: boolean;
}
