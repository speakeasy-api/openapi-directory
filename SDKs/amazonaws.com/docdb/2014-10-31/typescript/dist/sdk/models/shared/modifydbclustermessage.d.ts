import { SpeakeasyBase } from "../../../internal/utils";
import { CloudwatchLogsExportConfiguration } from "./cloudwatchlogsexportconfiguration";
/**
 * Represents the input to <a>ModifyDBCluster</a>.
 */
export declare class ModifyDBClusterMessage extends SpeakeasyBase {
    applyImmediately?: boolean;
    backupRetentionPeriod?: number;
    cloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
    dbClusterIdentifier: string;
    dbClusterParameterGroupName?: string;
    deletionProtection?: boolean;
    engineVersion?: string;
    masterUserPassword?: string;
    newDBClusterIdentifier?: string;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    vpcSecurityGroupIds?: string[];
}
