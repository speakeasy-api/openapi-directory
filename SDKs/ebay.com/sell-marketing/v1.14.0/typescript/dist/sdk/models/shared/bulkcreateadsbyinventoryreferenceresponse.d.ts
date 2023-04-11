import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAdsByInventoryReferenceResponse } from "./createadsbyinventoryreferenceresponse";
/**
 * This type defines the response fields used by the <b>bulkCreateAdsByInventoryReference</b> method.
 */
export declare class BulkCreateAdsByInventoryReferenceResponse extends SpeakeasyBase {
    /**
     * This array displays the list of ads that were successfully created. For any ads that were not created successfully, the errors array may provide more detail about why creation of one or more ads failed.
     */
    responses?: CreateAdsByInventoryReferenceResponse[];
}
