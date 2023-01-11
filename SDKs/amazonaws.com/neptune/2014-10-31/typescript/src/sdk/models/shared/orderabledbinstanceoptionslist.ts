import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZoneList } from "./availabilityzonelist";



// OrderableDbInstanceOptionsList
/** 
 * <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p>
**/
export class OrderableDbInstanceOptionsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AvailabilityZoneList })
  availabilityZones?: AvailabilityZoneList[];

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  licenseModel?: string;

  @SpeakeasyMetadata()
  maxIopsPerDbInstance?: number;

  @SpeakeasyMetadata()
  maxIopsPerGib?: number;

  @SpeakeasyMetadata()
  maxStorageSize?: number;

  @SpeakeasyMetadata()
  minIopsPerDbInstance?: number;

  @SpeakeasyMetadata()
  minIopsPerGib?: number;

  @SpeakeasyMetadata()
  minStorageSize?: number;

  @SpeakeasyMetadata()
  multiAZCapable?: boolean;

  @SpeakeasyMetadata()
  readReplicaCapable?: boolean;

  @SpeakeasyMetadata()
  storageType?: string;

  @SpeakeasyMetadata()
  supportsEnhancedMonitoring?: boolean;

  @SpeakeasyMetadata()
  supportsIAMDatabaseAuthentication?: boolean;

  @SpeakeasyMetadata()
  supportsIops?: boolean;

  @SpeakeasyMetadata()
  supportsPerformanceInsights?: boolean;

  @SpeakeasyMetadata()
  supportsStorageEncryption?: boolean;

  @SpeakeasyMetadata()
  vpc?: boolean;
}
