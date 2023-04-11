import { SpeakeasyBase } from "../../../internal/utils";
import { ServerlessV2ScalingConfiguration } from "./serverlessv2scalingconfiguration";
import { TagList } from "./taglist";
export declare class CreateDBClusterMessage extends SpeakeasyBase {
    availabilityZones?: string[];
    backupRetentionPeriod?: number;
    characterSetName?: string;
    copyTagsToSnapshot?: boolean;
    dbClusterIdentifier: string;
    dbClusterParameterGroupName?: string;
    dbSubnetGroupName?: string;
    databaseName?: string;
    deletionProtection?: boolean;
    enableCloudwatchLogsExports?: string[];
    enableIAMDatabaseAuthentication?: boolean;
    engine: string;
    engineVersion?: string;
    globalClusterIdentifier?: string;
    kmsKeyId?: string;
    masterUserPassword?: string;
    masterUsername?: string;
    optionGroupName?: string;
    port?: number;
    preSignedUrl?: string;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    replicationSourceIdentifier?: string;
    /**
     * <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>
     */
    serverlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
    storageEncrypted?: boolean;
    tags?: TagList[];
    vpcSecurityGroupIds?: string[];
}
