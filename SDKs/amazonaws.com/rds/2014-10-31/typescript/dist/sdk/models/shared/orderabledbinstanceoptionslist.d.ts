import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZoneList } from "./availabilityzonelist";
import { AvailableProcessorFeatureList } from "./availableprocessorfeaturelist";
/**
 * <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <code>DescribeOrderableDBInstanceOptions</code> action. </p>
**/
export declare class OrderableDbInstanceOptionsList extends SpeakeasyBase {
    availabilityZoneGroup?: string;
    availabilityZones?: AvailabilityZoneList[];
    availableProcessorFeatures?: AvailableProcessorFeatureList[];
    dbInstanceClass?: string;
    engine?: string;
    engineVersion?: string;
    licenseModel?: string;
    maxIopsPerDbInstance?: number;
    maxIopsPerGib?: number;
    maxStorageSize?: number;
    minIopsPerDbInstance?: number;
    minIopsPerGib?: number;
    minStorageSize?: number;
    multiAZCapable?: boolean;
    outpostCapable?: boolean;
    readReplicaCapable?: boolean;
    storageType?: string;
    supportedActivityStreamModes?: string[];
    supportedEngineModes?: string[];
    supportsEnhancedMonitoring?: boolean;
    supportsGlobalDatabases?: boolean;
    supportsIAMDatabaseAuthentication?: boolean;
    supportsIops?: boolean;
    supportsKerberosAuthentication?: boolean;
    supportsPerformanceInsights?: boolean;
    supportsStorageAutoscaling?: boolean;
    supportsStorageEncryption?: boolean;
    vpc?: boolean;
}
