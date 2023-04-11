import { SpeakeasyBase } from "../../../internal/utils";
import { PendingCloudwatchLogsExports } from "./pendingcloudwatchlogsexports";
/**
 * This data type is used as a response element in the <code>ModifyDBCluster</code> operation and contains changes that will be applied during the next maintenance window.
 */
export declare class ClusterPendingModifiedValues extends SpeakeasyBase {
    allocatedStorage?: number;
    backupRetentionPeriod?: number;
    dbClusterIdentifier?: string;
    engineVersion?: string;
    iamDatabaseAuthenticationEnabled?: boolean;
    iops?: number;
    masterUserPassword?: string;
    /**
     * A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.
     */
    pendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
}
