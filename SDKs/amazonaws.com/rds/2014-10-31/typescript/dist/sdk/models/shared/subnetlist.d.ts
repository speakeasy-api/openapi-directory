import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { Outpost } from "./outpost";
/**
 * This data type is used as a response element for the <code>DescribeDBSubnetGroups</code> operation.
 */
export declare class SubnetList extends SpeakeasyBase {
    /**
     * <p>Contains Availability Zone information.</p> <p>This data type is used as an element in the <code>OrderableDBInstanceOption</code> data type.</p>
     */
    subnetAvailabilityZone?: AvailabilityZone;
    subnetIdentifier?: string;
    subnetOutpost?: Outpost;
    subnetStatus?: string;
}
