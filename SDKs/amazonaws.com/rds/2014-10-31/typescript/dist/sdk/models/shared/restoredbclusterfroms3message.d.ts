import { SpeakeasyBase } from "../../../internal/utils";
import { ServerlessV2ScalingConfiguration } from "./serverlessv2scalingconfiguration";
import { TagList } from "./taglist";
export declare class RestoreDBClusterFromS3Message extends SpeakeasyBase {
    availabilityZones?: string[];
    backtrackWindow?: number;
    backupRetentionPeriod?: number;
    characterSetName?: string;
    copyTagsToSnapshot?: boolean;
    dbClusterIdentifier: string;
    dbClusterParameterGroupName?: string;
    dbSubnetGroupName?: string;
    databaseName?: string;
    deletionProtection?: boolean;
    domain?: string;
    domainIAMRoleName?: string;
    enableCloudwatchLogsExports?: string[];
    enableIAMDatabaseAuthentication?: boolean;
    engine: string;
    engineVersion?: string;
    kmsKeyId?: string;
    manageMasterUserPassword?: boolean;
    masterUserPassword?: string;
    masterUserSecretKmsKeyId?: string;
    masterUsername: string;
    networkType?: string;
    optionGroupName?: string;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    s3BucketName: string;
    s3IngestionRoleArn: string;
    s3Prefix?: string;
    /**
     * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    serverlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
    sourceEngine: string;
    sourceEngineVersion: string;
    storageEncrypted?: boolean;
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tags?: TagList[];
    vpcSecurityGroupIds?: string[];
}
