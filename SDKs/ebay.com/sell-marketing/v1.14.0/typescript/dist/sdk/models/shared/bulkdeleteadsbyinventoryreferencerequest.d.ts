import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteAdsByInventoryReferenceRequest } from "./deleteadsbyinventoryreferencerequest";
/**
 * This type defines the request fields that <b>bulkDeleteAdsByInventoryReference</b> uses to delete ads in bulk.
 */
export declare class BulkDeleteAdsByInventoryReferenceRequest extends SpeakeasyBase {
    /**
     * A list of inventory referenceID and inventory reference type pairs that specify the set of ads to remove in bulk.
     */
    requests?: DeleteAdsByInventoryReferenceRequest[];
}
