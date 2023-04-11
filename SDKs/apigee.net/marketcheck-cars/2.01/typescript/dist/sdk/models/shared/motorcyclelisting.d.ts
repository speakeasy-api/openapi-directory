import { SpeakeasyBase } from "../../../internal/utils";
import { ListingNestExtraAttributes } from "./listingnestextraattributes";
import { ListingNestMedia } from "./listingnestmedia";
import { MotorcycleBuild } from "./motorcyclebuild";
import { NestDealer } from "./nestdealer";
/**
 * Represents a full list of attributes available with Marketcheck for a car
 */
export declare class MotorcycleListing extends SpeakeasyBase {
    /**
     * Describes the Motorcycle specification
     */
    build?: MotorcycleBuild;
    /**
     * Color of the motorcycle
     */
    color?: string;
    dealer?: NestDealer;
    /**
     * Details Page url of the specific motorcycle
     */
    dpUrl?: string;
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
     * Inventory type of motorcycle
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
     * Odometer reading / reported miles usage for the motorcycle
     */
    miles?: number;
    /**
     * MSRP for the motorcycle
     */
    msrp?: number;
    /**
     * Asking price for the motorcycle
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
     * Seller type for the motorcycle
     */
    sellerType?: string;
    /**
     * Source domain of the listing
     */
    source?: string;
    /**
     * Stock number of motorcycle in dealers inventory
     */
    stockNo?: string;
    /**
     * VIN for the Motorcycle
     */
    vin?: string;
}
