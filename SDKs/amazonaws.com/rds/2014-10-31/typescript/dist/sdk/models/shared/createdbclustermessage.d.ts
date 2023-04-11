import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingConfiguration } from "./scalingconfiguration";
import { ServerlessV2ScalingConfiguration } from "./serverlessv2scalingconfiguration";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class CreateDBClusterMessage extends SpeakeasyBase {
    allocatedStorage?: number;
    autoMinorVersionUpgrade?: boolean;
    availabilityZones?: string[];
    backtrackWindow?: number;
    backupRetentionPeriod?: number;
    characterSetName?: string;
    copyTagsToSnapshot?: boolean;
    dbClusterIdentifier: string;
    dbClusterInstanceClass?: string;
    dbClusterParameterGroupName?: string;
    dbSubnetGroupName?: string;
    dbSystemId?: string;
    databaseName?: string;
    deletionProtection?: boolean;
    domain?: string;
    domainIAMRoleName?: string;
    enableCloudwatchLogsExports?: string[];
    enableGlobalWriteForwarding?: boolean;
    enableHttpEndpoint?: boolean;
    enableIAMDatabaseAuthentication?: boolean;
    enablePerformanceInsights?: boolean;
    engine: string;
    engineMode?: string;
    engineVersion?: string;
    globalClusterIdentifier?: string;
    iops?: number;
    kmsKeyId?: string;
    manageMasterUserPassword?: boolean;
    masterUserPassword?: string;
    masterUserSecretKmsKeyId?: string;
    masterUsername?: string;
    monitoringInterval?: number;
    monitoringRoleArn?: string;
    networkType?: string;
    optionGroupName?: string;
    performanceInsightsKMSKeyId?: string;
    performanceInsightsRetentionPeriod?: number;
    port?: number;
    preSignedUrl?: string;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    replicationSourceIdentifier?: string;
    scalingConfiguration?: ScalingConfiguration;
    /**
     * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    serverlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
    sourceRegion?: string;
    storageEncrypted?: boolean;
    storageType?: string;
    tags?: TagList[];
    vpcSecurityGroupIds?: string[];
}
