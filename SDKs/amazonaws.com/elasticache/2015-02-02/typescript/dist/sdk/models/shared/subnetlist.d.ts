import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { NetworkTypeEnum } from "./networktypeenum";
import { SubnetOutpost } from "./subnetoutpost";
/**
 * Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.
 */
export declare class SubnetList extends SpeakeasyBase {
    subnetAvailabilityZone?: AvailabilityZone;
    subnetIdentifier?: string;
    subnetOutpost?: SubnetOutpost;
    supportedNetworkTypes?: NetworkTypeEnum[];
}
