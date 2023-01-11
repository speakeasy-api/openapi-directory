import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZoneList } from "./availabilityzonelist";
export declare class OrderableDbInstanceOptionsList extends SpeakeasyBase {
    availabilityZones?: AvailabilityZoneList[];
    dbInstanceClass?: string;
    engine?: string;
    engineVersion?: string;
    licenseModel?: string;
    multiAZCapable?: boolean;
    readReplicaCapable?: boolean;
    storageType?: string;
    supportsIops?: boolean;
    vpc?: boolean;
}
