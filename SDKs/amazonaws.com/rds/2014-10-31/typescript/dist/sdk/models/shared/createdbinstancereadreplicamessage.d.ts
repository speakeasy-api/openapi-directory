import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessorFeatureList } from "./processorfeaturelist";
import { ReplicaModeEnum } from "./replicamodeenum";
import { TagList } from "./taglist";
export declare class CreateDBInstanceReadReplicaMessage extends SpeakeasyBase {
    allocatedStorage?: number;
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    copyTagsToSnapshot?: boolean;
    customIamInstanceProfile?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    dbParameterGroupName?: string;
    dbSubnetGroupName?: string;
    deletionProtection?: boolean;
    domain?: string;
    domainIAMRoleName?: string;
    enableCloudwatchLogsExports?: string[];
    enableCustomerOwnedIp?: boolean;
    enableIAMDatabaseAuthentication?: boolean;
    enablePerformanceInsights?: boolean;
    iops?: number;
    kmsKeyId?: string;
    maxAllocatedStorage?: number;
    monitoringInterval?: number;
    monitoringRoleArn?: string;
    multiAZ?: boolean;
    networkType?: string;
    optionGroupName?: string;
    performanceInsightsKMSKeyId?: string;
    performanceInsightsRetentionPeriod?: number;
    port?: number;
    preSignedUrl?: string;
    processorFeatures?: ProcessorFeatureList[];
    publiclyAccessible?: boolean;
    replicaMode?: ReplicaModeEnum;
    sourceDBClusterIdentifier?: string;
    sourceDBInstanceIdentifier?: string;
    sourceRegion?: string;
    storageThroughput?: number;
    storageType?: string;
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tags?: TagList[];
    useDefaultProcessorFeatures?: boolean;
    vpcSecurityGroupIds?: string[];
}
