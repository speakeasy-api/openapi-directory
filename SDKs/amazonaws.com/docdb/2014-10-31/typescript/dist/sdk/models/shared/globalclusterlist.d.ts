import { SpeakeasyBase } from "../../../internal/utils";
import { GlobalClusterMemberList } from "./globalclustermemberlist";
/**
 * A data type representing an Amazon DocumentDB global cluster.
 */
export declare class GlobalClusterList extends SpeakeasyBase {
    databaseName?: string;
    deletionProtection?: boolean;
    engine?: string;
    engineVersion?: string;
    globalClusterArn?: string;
    globalClusterIdentifier?: string;
    globalClusterMembers?: GlobalClusterMemberList[];
    globalClusterResourceId?: string;
    status?: string;
    storageEncrypted?: boolean;
}
