import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * This type defines the fields returned in a delete-ad response.
 */
export declare class DeleteAdResponse extends SpeakeasyBase {
    /**
     * The unique identifier of the ad that was deleted, or the ad that the seller attempted to delete.
     */
    adId?: string;
    /**
     * An array of the errors or warnings associated with the request.
     */
    errors?: ErrorT[];
    /**
     * A unique eBay-assigned ID for a listing that is generated when the listing is created.
     */
    listingId?: string;
    /**
     * An HTTP status code that indicates the response-status of the request. Check this code to see if the ad was successfully deleted.<span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller deletes, or attempts to delete.</span>
     */
    statusCode?: number;
}
