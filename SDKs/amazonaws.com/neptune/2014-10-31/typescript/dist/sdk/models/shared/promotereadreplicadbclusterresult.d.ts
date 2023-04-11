import { SpeakeasyBase } from "../../../internal/utils";
import { DBCluster } from "./dbcluster";
/**
 * Success
 */
export declare class PromoteReadReplicaDBClusterResult extends SpeakeasyBase {
    /**
     * <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
     */
    dbCluster?: DBCluster;
}
