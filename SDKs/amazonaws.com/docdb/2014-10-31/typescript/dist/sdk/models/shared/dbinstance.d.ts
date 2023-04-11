import { SpeakeasyBase } from "../../../internal/utils";
import { DBInstanceStatusInfoList } from "./dbinstancestatusinfolist";
import { DBSubnetGroup } from "./dbsubnetgroup";
import { Endpoint } from "./endpoint";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";
/**
 * Detailed information about an instance.
 */
export declare class DBInstance extends SpeakeasyBase {
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    backupRetentionPeriod?: number;
    caCertificateIdentifier?: string;
    copyTagsToSnapshot?: boolean;
    dbClusterIdentifier?: string;
    dbInstanceArn?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier?: string;
    dbInstanceStatus?: string;
    dbSubnetGroup?: DBSubnetGroup;
    dbiResourceId?: string;
    enabledCloudwatchLogsExports?: string[];
    endpoint?: Endpoint;
    engine?: string;
    engineVersion?: string;
    instanceCreateTime?: Date;
    kmsKeyId?: string;
    latestRestorableTime?: Date;
    pendingModifiedValues?: PendingModifiedValues;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    promotionTier?: number;
    publiclyAccessible?: boolean;
    statusInfos?: DBInstanceStatusInfoList[];
    storageEncrypted?: boolean;
    vpcSecurityGroups?: VpcSecurityGroupMembershipList[];
}
