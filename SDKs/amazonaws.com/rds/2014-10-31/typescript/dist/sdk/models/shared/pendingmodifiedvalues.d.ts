import { SpeakeasyBase } from "../../../internal/utils";
import { AutomationModeEnum } from "./automationmodeenum";
import { PendingCloudwatchLogsExports } from "./pendingcloudwatchlogsexports";
import { ProcessorFeatureList } from "./processorfeaturelist";
/**
 * This data type is used as a response element in the <code>ModifyDBInstance</code> operation and contains changes that will be applied during the next maintenance window.
 */
export declare class PendingModifiedValues extends SpeakeasyBase {
    allocatedStorage?: number;
    automationMode?: AutomationModeEnum;
    backupRetentionPeriod?: number;
    caCertificateIdentifier?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier?: string;
    dbSubnetGroupName?: string;
    engineVersion?: string;
    iamDatabaseAuthenticationEnabled?: boolean;
    iops?: number;
    licenseModel?: string;
    masterUserPassword?: string;
    multiAZ?: boolean;
    /**
     * A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.
     */
    pendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
    port?: number;
    processorFeatures?: ProcessorFeatureList[];
    resumeFullAutomationModeTime?: Date;
    storageThroughput?: number;
    storageType?: string;
}
