import { SpeakeasyBase } from "../../../internal/utils";
import { AwsRdsDbDomainMembership } from "./awsrdsdbdomainmembership";
import { AwsRdsDbInstanceAssociatedRole } from "./awsrdsdbinstanceassociatedrole";
import { AwsRdsDbInstanceEndpoint } from "./awsrdsdbinstanceendpoint";
import { AwsRdsDbInstanceVpcSecurityGroup } from "./awsrdsdbinstancevpcsecuritygroup";
import { AwsRdsDbOptionGroupMembership } from "./awsrdsdboptiongroupmembership";
import { AwsRdsDbParameterGroup } from "./awsrdsdbparametergroup";
import { AwsRdsDbPendingModifiedValues } from "./awsrdsdbpendingmodifiedvalues";
import { AwsRdsDbProcessorFeature } from "./awsrdsdbprocessorfeature";
import { AwsRdsDbStatusInfo } from "./awsrdsdbstatusinfo";
import { AwsRdsDbSubnetGroup } from "./awsrdsdbsubnetgroup";
/**
 * Contains the details of an Amazon RDS DB instance.
 */
export declare class AwsRdsDbInstanceDetails extends SpeakeasyBase {
    allocatedStorage?: number;
    associatedRoles?: AwsRdsDbInstanceAssociatedRole[];
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    backupRetentionPeriod?: number;
    caCertificateIdentifier?: string;
    characterSetName?: string;
    copyTagsToSnapshot?: boolean;
    dbClusterIdentifier?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier?: string;
    dbName?: string;
    dbInstancePort?: number;
    dbInstanceStatus?: string;
    dbParameterGroups?: AwsRdsDbParameterGroup[];
    dbSecurityGroups?: string[];
    dbSubnetGroup?: AwsRdsDbSubnetGroup;
    dbiResourceId?: string;
    deletionProtection?: boolean;
    domainMemberships?: AwsRdsDbDomainMembership[];
    enabledCloudWatchLogsExports?: string[];
    endpoint?: AwsRdsDbInstanceEndpoint;
    engine?: string;
    engineVersion?: string;
    enhancedMonitoringResourceArn?: string;
    iamDatabaseAuthenticationEnabled?: boolean;
    instanceCreateTime?: string;
    iops?: number;
    kmsKeyId?: string;
    latestRestorableTime?: string;
    licenseModel?: string;
    /**
     * Specifies the connection endpoint.
     */
    listenerEndpoint?: AwsRdsDbInstanceEndpoint;
    masterUsername?: string;
    maxAllocatedStorage?: number;
    monitoringInterval?: number;
    monitoringRoleArn?: string;
    multiAz?: boolean;
    optionGroupMemberships?: AwsRdsDbOptionGroupMembership[];
    pendingModifiedValues?: AwsRdsDbPendingModifiedValues;
    performanceInsightsEnabled?: boolean;
    performanceInsightsKmsKeyId?: string;
    performanceInsightsRetentionPeriod?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    processorFeatures?: AwsRdsDbProcessorFeature[];
    promotionTier?: number;
    publiclyAccessible?: boolean;
    readReplicaDBClusterIdentifiers?: string[];
    readReplicaDBInstanceIdentifiers?: string[];
    readReplicaSourceDBInstanceIdentifier?: string;
    secondaryAvailabilityZone?: string;
    statusInfos?: AwsRdsDbStatusInfo[];
    storageEncrypted?: boolean;
    storageType?: string;
    tdeCredentialArn?: string;
    timezone?: string;
    vpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];
}
