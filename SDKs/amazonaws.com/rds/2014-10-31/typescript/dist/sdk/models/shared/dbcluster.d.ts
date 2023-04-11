import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityStreamModeEnum } from "./activitystreammodeenum";
import { ActivityStreamStatusEnum } from "./activitystreamstatusenum";
import { ClusterPendingModifiedValues } from "./clusterpendingmodifiedvalues";
import { DBClusterMemberList } from "./dbclustermemberlist";
import { DBClusterOptionGroupMemberships } from "./dbclusteroptiongroupmemberships";
import { DBClusterRoles } from "./dbclusterroles";
import { DomainMembershipList } from "./domainmembershiplist";
import { MasterUserSecret } from "./masterusersecret";
import { ScalingConfigurationInfo } from "./scalingconfigurationinfo";
import { ServerlessV2ScalingConfigurationInfo } from "./serverlessv2scalingconfigurationinfo";
import { TagList } from "./taglist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";
import { WriteForwardingStatusEnum } from "./writeforwardingstatusenum";
/**
 * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.</p> <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>, <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>, <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>, <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p> <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>, <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>, <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i> </p>
 */
export declare class DBCluster extends SpeakeasyBase {
    activityStreamKinesisStreamName?: string;
    activityStreamKmsKeyId?: string;
    activityStreamMode?: ActivityStreamModeEnum;
    activityStreamStatus?: ActivityStreamStatusEnum;
    allocatedStorage?: number;
    associatedRoles?: DBClusterRoles[];
    autoMinorVersionUpgrade?: boolean;
    automaticRestartTime?: Date;
    availabilityZones?: string[];
    backtrackConsumedChangeRecords?: number;
    backtrackWindow?: number;
    backupRetentionPeriod?: number;
    capacity?: number;
    characterSetName?: string;
    cloneGroupId?: string;
    clusterCreateTime?: Date;
    copyTagsToSnapshot?: boolean;
    crossAccountClone?: boolean;
    customEndpoints?: string[];
    dbClusterArn?: string;
    dbClusterIdentifier?: string;
    dbClusterInstanceClass?: string;
    dbClusterMembers?: DBClusterMemberList[];
    dbClusterOptionGroupMemberships?: DBClusterOptionGroupMemberships[];
    dbClusterParameterGroup?: string;
    dbSubnetGroup?: string;
    dbSystemId?: string;
    databaseName?: string;
    dbClusterResourceId?: string;
    deletionProtection?: boolean;
    domainMemberships?: DomainMembershipList[];
    earliestBacktrackTime?: Date;
    earliestRestorableTime?: Date;
    enabledCloudwatchLogsExports?: string[];
    endpoint?: string;
    engine?: string;
    engineMode?: string;
    engineVersion?: string;
    globalWriteForwardingRequested?: boolean;
    globalWriteForwardingStatus?: WriteForwardingStatusEnum;
    hostedZoneId?: string;
    httpEndpointEnabled?: boolean;
    iamDatabaseAuthenticationEnabled?: boolean;
    iops?: number;
    kmsKeyId?: string;
    latestRestorableTime?: Date;
    masterUserSecret?: MasterUserSecret;
    masterUsername?: string;
    monitoringInterval?: number;
    monitoringRoleArn?: string;
    multiAZ?: boolean;
    networkType?: string;
    pendingModifiedValues?: ClusterPendingModifiedValues;
    percentProgress?: string;
    performanceInsightsEnabled?: boolean;
    performanceInsightsKMSKeyId?: string;
    performanceInsightsRetentionPeriod?: number;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    readReplicaIdentifiers?: string[];
    readerEndpoint?: string;
    replicationSourceIdentifier?: string;
    /**
     * <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    scalingConfigurationInfo?: ScalingConfigurationInfo;
    /**
     * <p>Shows the scaling configuration for an Aurora Serverless v2 DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    serverlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo;
    status?: string;
    storageEncrypted?: boolean;
    storageType?: string;
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tagList?: TagList[];
    vpcSecurityGroups?: VpcSecurityGroupMembershipList[];
}
