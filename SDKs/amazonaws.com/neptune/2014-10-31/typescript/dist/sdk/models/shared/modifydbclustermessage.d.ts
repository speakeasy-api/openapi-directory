import { SpeakeasyBase } from "../../../internal/utils";
import { CloudwatchLogsExportConfiguration } from "./cloudwatchlogsexportconfiguration";
import { ServerlessV2ScalingConfiguration } from "./serverlessv2scalingconfiguration";
export declare class ModifyDBClusterMessage extends SpeakeasyBase {
    allowMajorVersionUpgrade?: boolean;
    applyImmediately?: boolean;
    backupRetentionPeriod?: number;
    cloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
    copyTagsToSnapshot?: boolean;
    dbClusterIdentifier: string;
    dbClusterParameterGroupName?: string;
    dbInstanceParameterGroupName?: string;
    deletionProtection?: boolean;
    enableIAMDatabaseAuthentication?: boolean;
    engineVersion?: string;
    masterUserPassword?: string;
    newDBClusterIdentifier?: string;
    optionGroupName?: string;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    /**
     * <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>
     */
    serverlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
    vpcSecurityGroupIds?: string[];
}
