import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingConfiguration } from "./scalingconfiguration";
import { ServerlessV2ScalingConfiguration } from "./serverlessv2scalingconfiguration";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class RestoreDBClusterToPointInTimeMessage extends SpeakeasyBase {
    backtrackWindow?: number;
    copyTagsToSnapshot?: boolean;
    dbClusterIdentifier: string;
    dbClusterInstanceClass?: string;
    dbClusterParameterGroupName?: string;
    dbSubnetGroupName?: string;
    deletionProtection?: boolean;
    domain?: string;
    domainIAMRoleName?: string;
    enableCloudwatchLogsExports?: string[];
    enableIAMDatabaseAuthentication?: boolean;
    engineMode?: string;
    iops?: number;
    kmsKeyId?: string;
    networkType?: string;
    optionGroupName?: string;
    port?: number;
    publiclyAccessible?: boolean;
    restoreToTime?: Date;
    restoreType?: string;
    scalingConfiguration?: ScalingConfiguration;
    /**
     * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    serverlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
    sourceDBClusterIdentifier: string;
    storageType?: string;
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tags?: TagList[];
    useLatestRestorableTime?: boolean;
    vpcSecurityGroupIds?: string[];
}
