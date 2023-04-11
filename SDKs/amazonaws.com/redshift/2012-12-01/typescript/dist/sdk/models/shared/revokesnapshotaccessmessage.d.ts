import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class RevokeSnapshotAccessMessage extends SpeakeasyBase {
    accountWithRestoreAccess: string;
    snapshotArn?: string;
    snapshotClusterIdentifier?: string;
    snapshotIdentifier?: string;
}
