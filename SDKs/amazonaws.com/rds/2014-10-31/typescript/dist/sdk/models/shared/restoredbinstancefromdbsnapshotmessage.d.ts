import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessorFeatureList } from "./processorfeaturelist";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class RestoreDBInstanceFromDBSnapshotMessage extends SpeakeasyBase {
    allocatedStorage?: number;
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    backupTarget?: string;
    copyTagsToSnapshot?: boolean;
    customIamInstanceProfile?: string;
    dbClusterSnapshotIdentifier?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    dbName?: string;
    dbParameterGroupName?: string;
    dbSnapshotIdentifier?: string;
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
    multiAZ?: boolean;
    networkType?: string;
    optionGroupName?: string;
    port?: number;
    processorFeatures?: ProcessorFeatureList[];
    publiclyAccessible?: boolean;
    storageThroughput?: number;
    storageType?: string;
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tags?: TagList[];
    tdeCredentialArn?: string;
    tdeCredentialPassword?: string;
    useDefaultProcessorFeatures?: boolean;
    vpcSecurityGroupIds?: string[];
}
