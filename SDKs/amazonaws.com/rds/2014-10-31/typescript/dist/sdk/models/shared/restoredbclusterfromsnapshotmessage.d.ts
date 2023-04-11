import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingConfiguration } from "./scalingconfiguration";
import { ServerlessV2ScalingConfiguration } from "./serverlessv2scalingconfiguration";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class RestoreDBClusterFromSnapshotMessage extends SpeakeasyBase {
    availabilityZones?: string[];
    backtrackWindow?: number;
    copyTagsToSnapshot?: boolean;
    dbClusterIdentifier: string;
    dbClusterInstanceClass?: string;
    dbClusterParameterGroupName?: string;
    dbSubnetGroupName?: string;
    databaseName?: string;
    deletionProtection?: boolean;
    domain?: string;
    domainIAMRoleName?: string;
    enableCloudwatchLogsExports?: string[];
    enableIAMDatabaseAuthentication?: boolean;
    engine: string;
    engineMode?: string;
    engineVersion?: string;
    iops?: number;
    kmsKeyId?: string;
    networkType?: string;
    optionGroupName?: string;
    port?: number;
    publiclyAccessible?: boolean;
    scalingConfiguration?: ScalingConfiguration;
    /**
     * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    serverlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
    snapshotIdentifier: string;
    storageType?: string;
    tags?: TagList[];
    vpcSecurityGroupIds?: string[];
}
