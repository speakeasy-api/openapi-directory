import { SpeakeasyBase } from "../../../internal/utils";
import { CloudwatchLogsExportConfiguration } from "./cloudwatchlogsexportconfiguration";
import { ScalingConfiguration } from "./scalingconfiguration";
import { ServerlessV2ScalingConfiguration } from "./serverlessv2scalingconfiguration";
/**
 * <p/>
 */
export declare class ModifyDBClusterMessage extends SpeakeasyBase {
    allocatedStorage?: number;
    allowMajorVersionUpgrade?: boolean;
    applyImmediately?: boolean;
    autoMinorVersionUpgrade?: boolean;
    backtrackWindow?: number;
    backupRetentionPeriod?: number;
    cloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
    copyTagsToSnapshot?: boolean;
    dbClusterIdentifier: string;
    dbClusterInstanceClass?: string;
    dbClusterParameterGroupName?: string;
    dbInstanceParameterGroupName?: string;
    deletionProtection?: boolean;
    domain?: string;
    domainIAMRoleName?: string;
    enableGlobalWriteForwarding?: boolean;
    enableHttpEndpoint?: boolean;
    enableIAMDatabaseAuthentication?: boolean;
    enablePerformanceInsights?: boolean;
    engineVersion?: string;
    iops?: number;
    manageMasterUserPassword?: boolean;
    masterUserPassword?: string;
    masterUserSecretKmsKeyId?: string;
    monitoringInterval?: number;
    monitoringRoleArn?: string;
    networkType?: string;
    newDBClusterIdentifier?: string;
    optionGroupName?: string;
    performanceInsightsKMSKeyId?: string;
    performanceInsightsRetentionPeriod?: number;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    rotateMasterUserPassword?: boolean;
    scalingConfiguration?: ScalingConfiguration;
    /**
     * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    serverlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
    storageType?: string;
    vpcSecurityGroupIds?: string[];
}
