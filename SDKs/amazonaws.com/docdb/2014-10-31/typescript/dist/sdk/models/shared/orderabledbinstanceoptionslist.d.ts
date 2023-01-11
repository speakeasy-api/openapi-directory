import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZoneList } from "./availabilityzonelist";
/**
 * The options that are available for an instance.
**/
export declare class OrderableDbInstanceOptionsList extends SpeakeasyBase {
    availabilityZones?: AvailabilityZoneList[];
    dbInstanceClass?: string;
    engine?: string;
    engineVersion?: string;
    licenseModel?: string;
    vpc?: boolean;
}
