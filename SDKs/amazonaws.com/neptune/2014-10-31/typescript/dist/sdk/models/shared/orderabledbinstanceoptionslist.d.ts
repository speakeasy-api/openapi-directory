import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZoneList } from "./availabilityzonelist";
/**
 * <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p>
**/
export declare class OrderableDbInstanceOptionsList extends SpeakeasyBase {
    availabilityZones?: AvailabilityZoneList[];
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
    readReplicaCapable?: boolean;
    storageType?: string;
    supportsEnhancedMonitoring?: boolean;
    supportsIAMDatabaseAuthentication?: boolean;
    supportsIops?: boolean;
    supportsPerformanceInsights?: boolean;
    supportsStorageEncryption?: boolean;
    vpc?: boolean;
}
