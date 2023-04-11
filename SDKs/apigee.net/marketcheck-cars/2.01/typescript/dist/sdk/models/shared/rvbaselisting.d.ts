import { SpeakeasyBase } from "../../../internal/utils";
import { ListingNestMedia } from "./listingnestmedia";
import { NestDealer } from "./nestdealer";
import { RVBuild } from "./rvbuild";
/**
 * Base RV listing
 */
export declare class RVBaseListing extends SpeakeasyBase {
    /**
     * Describes the RV specification
     */
    build?: RVBuild;
    dealer?: NestDealer;
    /**
     * Distance of the RV's location from the specified user lcoation
     */
    dist?: number;
    /**
     * Details Page url of the specific RV
     */
    dpUrl?: string;
    /**
     * Exterior color of the RV
     */
    exteriorColor?: string;
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
