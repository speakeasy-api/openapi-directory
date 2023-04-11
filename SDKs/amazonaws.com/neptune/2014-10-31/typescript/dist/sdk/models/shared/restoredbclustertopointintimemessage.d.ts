import { SpeakeasyBase } from "../../../internal/utils";
import { ServerlessV2ScalingConfiguration } from "./serverlessv2scalingconfiguration";
import { TagList } from "./taglist";
export declare class RestoreDBClusterToPointInTimeMessage extends SpeakeasyBase {
    dbClusterIdentifier: string;
    dbClusterParameterGroupName?: string;
    dbSubnetGroupName?: string;
    deletionProtection?: boolean;
    enableCloudwatchLogsExports?: string[];
    enableIAMDatabaseAuthentication?: boolean;
    kmsKeyId?: string;
    optionGroupName?: string;
    port?: number;
    restoreToTime?: Date;
    restoreType?: string;
    /**
     * <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>
     */
    serverlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
    sourceDBClusterIdentifier: string;
    tags?: TagList[];
    useLatestRestorableTime?: boolean;
    vpcSecurityGroupIds?: string[];
}
