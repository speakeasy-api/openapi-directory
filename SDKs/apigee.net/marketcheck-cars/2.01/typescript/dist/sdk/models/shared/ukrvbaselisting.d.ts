import { SpeakeasyBase } from "../../../internal/utils";
import { ListingNestMedia } from "./listingnestmedia";
import { NestDealer } from "./nestdealer";
import { UKRVBuild } from "./ukrvbuild";
/**
 * Base RV listing
 */
export declare class UKRVBaseListing extends SpeakeasyBase {
    /**
     * availability_status of the listing
     */
    availabilityStatus?: string;
    /**
     * Describes the RV specification
     */
    build?: UKRVBuild;
    /**
     * currency_indicator of the listing
     */
    currencyIndicator?: string;
    dealer?: NestDealer;
    /**
     * Distance of the RV's location from the specified user lcoation
     */
    dist?: number;
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
     * miles_indicator of the listing
     */
    milesIndicator?: string;
    /**
     * mot_expires of the listing
     */
    motExpires?: string;
    /**
     * motorhome_build of the listing
     */
    motorhomeBuild?: string;
    /**
     * MSRP for the RV
     */
    msrp?: number;
    /**
     * origin of the listing
     */
    origin?: string;
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
     * Details Page url of the specific RV
     */
    vdpUrl?: string;
    /**
     * VIN for the RV
     */
    vin?: string;
}
