import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessorFeatureList } from "./processorfeaturelist";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class RestoreDBInstanceToPointInTimeMessage extends SpeakeasyBase {
    allocatedStorage?: number;
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    backupTarget?: string;
    copyTagsToSnapshot?: boolean;
    customIamInstanceProfile?: string;
    dbInstanceClass?: string;
    dbName?: string;
    dbParameterGroupName?: string;
    dbSubnetGroupName?: string;
    deletionProtection?: boolean;
    domain?: string;
    domainIAMRoleName?: string;
    enableCloudwatchLogsExports?: string[];
    enableCustomerOwnedIp?: boolean;
    enableIAMDatabaseAuthentication?: boolean;
    engine?: string;
    iops?: number;
    licenseModel?: string;
    maxAllocatedStorage?: number;
    multiAZ?: boolean;
    networkType?: string;
    optionGroupName?: string;
    port?: number;
    processorFeatures?: ProcessorFeatureList[];
    publiclyAccessible?: boolean;
    restoreTime?: Date;
    sourceDBInstanceAutomatedBackupsArn?: string;
    sourceDBInstanceIdentifier?: string;
    sourceDbiResourceId?: string;
    storageThroughput?: number;
    storageType?: string;
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tags?: TagList[];
    targetDBInstanceIdentifier: string;
    tdeCredentialArn?: string;
    tdeCredentialPassword?: string;
    useDefaultProcessorFeatures?: boolean;
    useLatestRestorableTime?: boolean;
    vpcSecurityGroupIds?: string[];
}
