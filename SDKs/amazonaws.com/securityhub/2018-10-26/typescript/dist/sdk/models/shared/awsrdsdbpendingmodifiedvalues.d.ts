import { SpeakeasyBase } from "../../../internal/utils";
import { AwsRdsDbProcessorFeature } from "./awsrdsdbprocessorfeature";
import { AwsRdsPendingCloudWatchLogsExports } from "./awsrdspendingcloudwatchlogsexports";
/**
 * Changes to a DB instance that are currently pending.
 */
export declare class AwsRdsDbPendingModifiedValues extends SpeakeasyBase {
    allocatedStorage?: number;
    backupRetentionPeriod?: number;
    caCertificateIdentifier?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier?: string;
    dbSubnetGroupName?: string;
    engineVersion?: string;
    iops?: number;
    licenseModel?: string;
    masterUserPassword?: string;
    multiAZ?: boolean;
    pendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;
    port?: number;
    processorFeatures?: AwsRdsDbProcessorFeature[];
    storageType?: string;
}
