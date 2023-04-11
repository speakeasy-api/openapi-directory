import { SpeakeasyBase } from "../../../internal/utils";
import { ListingNestExtraAttributes } from "./listingnestextraattributes";
import { ListingNestMedia } from "./listingnestmedia";
import { NestDealer } from "./nestdealer";
import { RVBuild } from "./rvbuild";
/**
 * Represents a full list of attributes available with Marketcheck for a car
 */
export declare class RVListing extends SpeakeasyBase {
    /**
     * Describes the RV specification
     */
    build?: RVBuild;
    dealer?: NestDealer;
    /**
     * Details Page url of the specific RV
     */
    dpUrl?: string;
    /**
     * Exterior color of the RV
     */
    exteriorColor?: string;
    extra?: ListingNestExtraAttributes;
    /**
     * Listing first seen at first scraped timestamp
     */
    firstSeenAt?: number;
    /**
     * Listing first seen at first scraped date
     */
    firstSeenAtDate?: string;
    /**
     * Listing title as displayed on the source website
     */
    heading?: string;
    /**
     * Unique identifier representing a specific listing from the Marketcheck database
     */
    id?: string;
    /**
     * Interior color of the RV
     */
    interiorColor?: string;
    /**
     * Inventory type of RV
     */
    inventoryType?: string;
    /**
     * Listing last seen at (most recent) timestamp
     */
    lastSeenAt?: number;
    /**
     * Listing last seen at (most recent) date
     */
    lastSeenAtDate?: string;
    media?: ListingNestMedia;
    /**
     * Odometer reading / reported miles usage for the RV
     */
    miles?: number;
    /**
     * MSRP for the RV
     */
    msrp?: number;
    /**
     * Asking price for the RV
     */
    price?: number;
    /**
     * Listing last seen at date timestamp
     */
    scrapedAt?: number;
    /**
     * Listing last seen at date
     */
    scrapedAtDate?: string;
    /**
     * Seller type for the RV
     */
    sellerType?: string;
    /**
     * Source domain of the listing
     */
    source?: string;
    /**
     * Stock number of RV in dealers inventory
     */
    stockNo?: string;
    /**
     * VIN for the RV
     */
    vin?: string;
}
