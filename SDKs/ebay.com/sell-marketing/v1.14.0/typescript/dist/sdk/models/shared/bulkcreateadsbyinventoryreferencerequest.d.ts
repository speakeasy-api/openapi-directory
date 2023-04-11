import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAdsByInventoryReferenceRequest } from "./createadsbyinventoryreferencerequest";
/**
 * This type defines the fields used to create ads in bulk by inventory reference IDs.
 */
export declare class BulkCreateAdsByInventoryReferenceRequest extends SpeakeasyBase {
    /**
     * A list of inventory reference ID and inventory reference type pairs, and the bid percentage, which the call uses to create ads in bulk.
     */
    requests?: CreateAdsByInventoryReferenceRequest[];
}
