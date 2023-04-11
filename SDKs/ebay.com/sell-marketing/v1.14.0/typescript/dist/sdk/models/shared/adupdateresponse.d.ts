import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * A type that contains the fields for the ad update response.
 */
export declare class AdUpdateResponse extends SpeakeasyBase {
    /**
     * A unique eBay-assigned ID that is generated when the ad is created.
     */
    adId?: string;
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
