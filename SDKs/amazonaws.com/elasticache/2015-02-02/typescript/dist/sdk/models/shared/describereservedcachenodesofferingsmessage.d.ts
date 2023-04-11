import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>DescribeReservedCacheNodesOfferings</code> operation.
 */
export declare class DescribeReservedCacheNodesOfferingsMessage extends SpeakeasyBase {
    cacheNodeType?: string;
    duration?: string;
    marker?: string;
    maxRecords?: number;
    offeringType?: string;
    productDescription?: string;
    reservedCacheNodesOfferingId?: string;
}
