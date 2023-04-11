import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterPendingModifiedValues } from "./clusterpendingmodifiedvalues";
import { DBClusterMemberList } from "./dbclustermemberlist";
import { DBClusterOptionGroupMemberships } from "./dbclusteroptiongroupmemberships";
import { DBClusterRoles } from "./dbclusterroles";
import { ServerlessV2ScalingConfigurationInfo } from "./serverlessv2scalingconfigurationinfo";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";
/**
 * <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
 */
export declare class DBClusterList extends SpeakeasyBase {
    allocatedStorage?: number;
    associatedRoles?: DBClusterRoles[];
    automaticRestartTime?: Date;
    availabilityZones?: string[];
    backupRetentionPeriod?: number;
    characterSetName?: string;
    cloneGroupId?: string;
    clusterCreateTime?: Date;
    copyTagsToSnapshot?: boolean;
    crossAccountClone?: boolean;
    dbClusterArn?: string;
    dbClusterIdentifier?: string;
    dbClusterMembers?: DBClusterMemberList[];
    dbClusterOptionGroupMemberships?: DBClusterOptionGroupMemberships[];
    dbClusterParameterGroup?: string;
    dbSubnetGroup?: string;
    databaseName?: string;
    dbClusterResourceId?: string;
    deletionProtection?: boolean;
    earliestRestorableTime?: Date;
    enabledCloudwatchLogsExports?: string[];
    endpoint?: string;
    engine?: string;
    engineVersion?: string;
    globalClusterIdentifier?: string;
    hostedZoneId?: string;
    iamDatabaseAuthenticationEnabled?: boolean;
    kmsKeyId?: string;
    latestRestorableTime?: Date;
    masterUsername?: string;
    multiAZ?: boolean;
    pendingModifiedValues?: ClusterPendingModifiedValues;
    percentProgress?: string;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    readReplicaIdentifiers?: string[];
    readerEndpoint?: string;
    replicationSourceIdentifier?: string;
    /**
     * <p>Shows the scaling configuration for a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>
     */
    serverlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo;
    status?: string;
    storageEncrypted?: boolean;
    vpcSecurityGroups?: VpcSecurityGroupMembershipList[];
}
