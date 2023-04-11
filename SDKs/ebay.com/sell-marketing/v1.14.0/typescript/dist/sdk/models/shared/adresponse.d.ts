import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * This type defines the fields returned in an ad response.
 */
export declare class AdResponse extends SpeakeasyBase {
    /**
     * A unique eBay-assigned ID for an ad group in a Promoted Listings Advanced (PLA) campaign that uses the Cost Per Click (CPC) funding model.<span class="tablenote"><b>Note:</b> This field will always be returned for  campaigns that use the CPC funding model. It will not be returned for campaigns that use the Cost Per Sale (CPS) funding model.</span>
     */
    adGroupId?: string;
    /**
     * A unique eBay-assigned ID for an ad. This ID is generated when an ad is created.<span class="tablenote"><b>Note:</b>This field is only returned when an ad is successfully created for the corresponding listing.</span>
     */
    adId?: string;
    /**
     * An array of errors associated with the request.
     */
    errors?: ErrorT[];
    /**
     * The getAd URI that points to the ad.<span class="tablenote"><b>Note:</b>This field is only returned when an ad is successfully created for the corresponding listing.</span>
     */
    href?: string;
    /**
     * A unique eBay-assigned ID for a listing that is generated when the listing is created.
     */
    listingId?: string;
    /**
     * An HTTP status code indicating if the corresponding ad was successfully created or not. <code>200 Successful</code> should be returned for successfully created ads.<span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller creates, or attempts to create.</span>
     */
    statusCode?: number;
}
