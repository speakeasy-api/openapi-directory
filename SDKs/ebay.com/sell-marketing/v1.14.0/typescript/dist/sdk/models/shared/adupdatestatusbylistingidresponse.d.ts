import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * A type that contains the fields for the ad update status by listing ID response.
 */
export declare class AdUpdateStatusByListingIdResponse extends SpeakeasyBase {
    /**
     * A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model.
     */
    adGroupId?: string;
    /**
     * A list of errors associated with the specified listing ID.
     */
    errors?: ErrorT[];
    /**
     * The URI for the ad, which can be used to retrieve the ad.
     */
    href?: string;
    /**
     * A unique eBay-assigned ID that is generated when the listing is created.
     */
    listingId?: string;
    /**
     * An HTTP status code that indicates the response-status of the request.
     */
    statusCode?: number;
}
