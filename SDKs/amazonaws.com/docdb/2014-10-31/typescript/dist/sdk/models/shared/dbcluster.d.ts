import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterRoles } from "./dbclusterroles";
import { DbClusterMemberList } from "./dbclustermemberlist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";
/**
 * Detailed information about a cluster.
**/
export declare class DbCluster extends SpeakeasyBase {
    associatedRoles?: DbClusterRoles[];
    availabilityZones?: Record<string, any>[];
    backupRetentionPeriod?: number;
    clusterCreateTime?: Date;
    dbClusterArn?: string;
    dbClusterIdentifier?: string;
    dbClusterMembers?: DbClusterMemberList[];
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
    readReplicaIdentifiers?: Record<string, any>[];
    readerEndpoint?: string;
    replicationSourceIdentifier?: string;
    status?: string;
    storageEncrypted?: boolean;
    vpcSecurityGroups?: VpcSecurityGroupMembershipList[];
}
