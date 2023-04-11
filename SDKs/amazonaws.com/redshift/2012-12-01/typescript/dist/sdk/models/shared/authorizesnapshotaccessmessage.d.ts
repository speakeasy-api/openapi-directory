import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class AuthorizeSnapshotAccessMessage extends SpeakeasyBase {
    accountWithRestoreAccess: string;
    snapshotArn?: string;
    snapshotClusterIdentifier?: string;
    snapshotIdentifier?: string;
}
