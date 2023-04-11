import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input of a <code>PurchaseReservedCacheNodesOffering</code> operation.
 */
export declare class PurchaseReservedCacheNodesOfferingMessage extends SpeakeasyBase {
    cacheNodeCount?: number;
    reservedCacheNodeId?: string;
    reservedCacheNodesOfferingId: string;
    tags?: TagList[];
}
