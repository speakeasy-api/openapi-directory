import { SpeakeasyBase } from "../../../internal/utils";
import { GlobalClusterMemberList } from "./globalclustermemberlist";
/**
 * <p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p>
 */
export declare class GlobalClusterList extends SpeakeasyBase {
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
