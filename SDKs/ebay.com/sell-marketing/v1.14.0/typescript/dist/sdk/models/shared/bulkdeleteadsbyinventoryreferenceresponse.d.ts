import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteAdsByInventoryReferenceResponse } from "./deleteadsbyinventoryreferenceresponse";
/**
 * This type defines a container that lists the ads that <b>bulkDeleteAdsByInventoryReference</b> deleted.
 */
export declare class BulkDeleteAdsByInventoryReferenceResponse extends SpeakeasyBase {
    /**
     * An array of the ads that were deleted by the <b>bulkDeleteAdsByInventoryReference</b> request, including information associated with each individual delete request.
     */
    responses?: DeleteAdsByInventoryReferenceResponse[];
}
