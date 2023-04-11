import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input to <a>CreateDBCluster</a>.
 */
export declare class CreateDBClusterMessage extends SpeakeasyBase {
    availabilityZones?: string[];
    backupRetentionPeriod?: number;
    dbClusterIdentifier: string;
    dbClusterParameterGroupName?: string;
    dbSubnetGroupName?: string;
    deletionProtection?: boolean;
    enableCloudwatchLogsExports?: string[];
    engine: string;
    engineVersion?: string;
    globalClusterIdentifier?: string;
    kmsKeyId?: string;
    masterUserPassword?: string;
    masterUsername?: string;
    port?: number;
    preSignedUrl?: string;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    storageEncrypted?: boolean;
    tags?: TagList[];
    vpcSecurityGroupIds?: string[];
}
