import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterRoles } from "./dbclusterroles";
import { DbClusterMemberList } from "./dbclustermemberlist";
import { DbClusterOptionGroupMemberships } from "./dbclusteroptiongroupmemberships";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";
/**
 * <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
**/
export declare class DbClusterList extends SpeakeasyBase {
    allocatedStorage?: number;
    associatedRoles?: DbClusterRoles[];
    automaticRestartTime?: Date;
    availabilityZones?: Record<string, any>[];
    backupRetentionPeriod?: number;
    characterSetName?: string;
    cloneGroupId?: string;
    clusterCreateTime?: Date;
    copyTagsToSnapshot?: boolean;
    crossAccountClone?: boolean;
    dbClusterArn?: string;
    dbClusterIdentifier?: string;
    dbClusterMembers?: DbClusterMemberList[];
    dbClusterOptionGroupMemberships?: DbClusterOptionGroupMemberships[];
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
    hostedZoneId?: string;
    iamDatabaseAuthenticationEnabled?: boolean;
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
