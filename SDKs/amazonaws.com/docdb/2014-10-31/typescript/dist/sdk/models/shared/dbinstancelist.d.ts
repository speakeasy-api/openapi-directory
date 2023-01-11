import { SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroup } from "./dbsubnetgroup";
import { Endpoint } from "./endpoint";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { DbInstanceStatusInfoList } from "./dbinstancestatusinfolist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";
/**
 * Detailed information about an instance.
**/
export declare class DbInstanceList extends SpeakeasyBase {
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    backupRetentionPeriod?: number;
    caCertificateIdentifier?: string;
    dbClusterIdentifier?: string;
    dbInstanceArn?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier?: string;
    dbInstanceStatus?: string;
    dbSubnetGroup?: DbSubnetGroup;
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
    statusInfos?: DbInstanceStatusInfoList[];
    storageEncrypted?: boolean;
    vpcSecurityGroups?: VpcSecurityGroupMembershipList[];
}
