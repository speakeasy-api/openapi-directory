import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterMemberList } from "./dbclustermemberlist";
import { DBClusterRoles } from "./dbclusterroles";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";
/**
 * Detailed information about a cluster.
 */
export declare class DBCluster extends SpeakeasyBase {
    associatedRoles?: DBClusterRoles[];
    availabilityZones?: string[];
    backupRetentionPeriod?: number;
    cloneGroupId?: string;
    clusterCreateTime?: Date;
    dbClusterArn?: string;
    dbClusterIdentifier?: string;
    dbClusterMembers?: DBClusterMemberList[];
    dbClusterParameterGroup?: string;
    dbSubnetGroup?: string;
    dbClusterResourceId?: string;
    deletionProtection?: boolean;
    earliestRestorableTime?: Date;
    enabledCloudwatchLogsExports?: string[];
    endpoint?: string;
    engine?: string;
    engineVersion?: string;
    hostedZoneId?: string;
    kmsKeyId?: string;
    latestRestorableTime?: Date;
    masterUsername?: string;
    multiAZ?: boolean;
    percentProgress?: string;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    readReplicaIdentifiers?: string[];
    readerEndpoint?: string;
    replicationSourceIdentifier?: string;
    status?: string;
    storageEncrypted?: boolean;
    vpcSecurityGroups?: VpcSecurityGroupMembershipList[];
}
