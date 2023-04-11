import { SpeakeasyBase } from "../../../internal/utils";
import { BackupStatusEnum } from "./backupstatusenum";
import { BackupTypeEnum } from "./backuptypeenum";
/**
 * Describes a single backup.
 */
export declare class Backup extends SpeakeasyBase {
    backupArn?: string;
    backupId?: string;
    backupType?: BackupTypeEnum;
    createdAt?: Date;
    description?: string;
    engine?: string;
    engineModel?: string;
    engineVersion?: string;
    instanceProfileArn?: string;
    instanceType?: string;
    keyPair?: string;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    s3DataSize?: number;
    s3DataUrl?: string;
    s3LogUrl?: string;
    securityGroupIds?: string[];
    serverName?: string;
    serviceRoleArn?: string;
    status?: BackupStatusEnum;
    statusDescription?: string;
    subnetIds?: string[];
    toolsVersion?: string;
    userArn?: string;
}
