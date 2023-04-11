import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateAdsByInventoryReferenceResponse } from "./updateadsbyinventoryreferenceresponse";
/**
 * A type that defines the fields for the <b>BulkUpdateAdStatusByInventoryReference</b> response.
 */
export declare class BulkUpdateAdsByInventoryReferenceResponse extends SpeakeasyBase {
    /**
     * A list of inventory references that were processed from the request.
     */
    responses?: UpdateAdsByInventoryReferenceResponse[];
}
