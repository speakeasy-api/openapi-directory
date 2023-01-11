import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedCacheNodesOfferingList } from "./reservedcachenodesofferinglist";
/**
 * Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.
**/
export declare class ReservedCacheNodesOfferingMessage extends SpeakeasyBase {
    marker?: string;
    reservedCacheNodesOfferings?: ReservedCacheNodesOfferingList[];
}
