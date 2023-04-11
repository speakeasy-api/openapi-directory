import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteAdResponse } from "./deleteadresponse";
/**
 * This type defines a container that lists the ads that <b>bulkDeleteAdsByListingId</b> deleted.
 */
export declare class BulkDeleteAdResponse extends SpeakeasyBase {
    /**
     * An array of the ads that were deleted by the <b>bulkDeleteAdsByListingId</b> request, including information associated with each individual delete request.
     */
    responses?: DeleteAdResponse[];
}
