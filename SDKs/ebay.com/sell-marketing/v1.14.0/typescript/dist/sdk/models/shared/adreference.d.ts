import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type defines the fields for an ad ID and its associated URL.
 */
export declare class AdReference extends SpeakeasyBase {
    /**
     * A unique eBay-assigned ID for an ad. This ID is generated when an ad is created.
     */
    adId?: string;
    /**
     * The getAd URI of an ad. You can use this URI to retrieve the ad.
     */
    href?: string;
}
