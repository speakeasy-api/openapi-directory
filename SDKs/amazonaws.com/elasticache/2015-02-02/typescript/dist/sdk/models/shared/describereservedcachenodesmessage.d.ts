import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>DescribeReservedCacheNodes</code> operation.
 */
export declare class DescribeReservedCacheNodesMessage extends SpeakeasyBase {
    cacheNodeType?: string;
    duration?: string;
    marker?: string;
    maxRecords?: number;
    offeringType?: string;
    productDescription?: string;
    reservedCacheNodeId?: string;
    reservedCacheNodesOfferingId?: string;
}
