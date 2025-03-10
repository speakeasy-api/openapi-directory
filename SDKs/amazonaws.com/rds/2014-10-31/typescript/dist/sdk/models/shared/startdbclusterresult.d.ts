import { SpeakeasyBase } from "../../../internal/utils";
import { DBCluster } from "./dbcluster";
/**
 * Success
 */
export declare class StartDBClusterResult extends SpeakeasyBase {
    /**
     * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.</p> <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>, <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>, <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>, <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p> <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>, <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>, <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    dbCluster?: DBCluster;
}
