import { SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";
import { ListingFinance } from "./listingfinance";
import { ListingLease } from "./listinglease";
import { ListingNestMedia } from "./listingnestmedia";
import { NestDealer } from "./nestdealer";
/**
 * Minimal set of attributes describing a listing
 */
export declare class BaseListing extends SpeakeasyBase {
    /**
     * Base exterior color of the car
     */
    baseExtColor?: string;
    /**
     * Base interior color of the car
     */
    baseIntColor?: string;
    /**
     * Describes the Car specification
     */
    build?: Build;
    /**
     * Flag to indicate whether listing is carfax_1_owner
     */
    carfax1Owner?: boolean;
    /**
     * Flag to indicate whether listing is carfax_clean_title
     */
    carfaxCleanTitle?: boolean;
    /**
     * Data source of the listing
     */
    dataSource?: string;
    dealer?: NestDealer;
    /**
     * Distance of the car's location from the specified user lcoation
     */
    dist?: number;
    /**
     * Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car
     */
    dom?: number;
    /**
     * Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car
     */
    dom180?: number;
    /**
     * Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car
     */
    domActive?: number;
    /**
     * Exterior color of the car
     */
    exteriorColor?: string;
    /**
     * Array of all finance offers for this listing
     */
    financingOptions?: ListingFinance[];
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
     * in_transit of the listing
     */
    inTransit?: boolean;
    /**
     * Interior color of the car
     */
    interiorColor?: string;
    /**
     * Inventory type of car
     */
    inventoryType?: string;
    /**
     * Certified car
     */
    isCertified?: number;
    /**
     * is_translated of the listing
     */
    isTranslated?: boolean;
    /**
     * Listing last seen at (most recent) timestamp
     */
    lastSeenAt?: number;
    /**
     * Listing last seen at (most recent) date
     */
    lastSeenAtDate?: string;
    /**
     * Array of all finance offers for this listing
     */
    leasingOptions?: ListingLease[];
    media?: ListingNestMedia;
    /**
     * Odometer reading / reported miles usage for the car
     */
    miles?: number;
    /**
     * model_code of the listing
     */
    modelCode?: string;
    /**
     * MSRP for the car
     */
    msrp?: number;
    /**
     * Asking price for the car
     */
    price?: number;
    /**
     * Percentage difference between the cars's current price and ref_price i.e. last reported price
     */
    priceChangePercent?: number;
    /**
     * Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date
     */
    refMiles?: string;
    /**
     * The date at which the last miles was reported online. This is earlier to last_seen_date
     */
    refMilesDt?: number;
    /**
     * Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date
     */
    refPrice?: string;
    /**
     * The date at which the last price was reported online. This is earlier to last_seen_date
     */
    refPriceDt?: number;
    /**
     * Listing last seen at date timestamp
     */
    scrapedAt?: number;
    /**
     * Listing last seen at date
     */
    scrapedAtDate?: string;
    /**
     * Seller type for the car
     */
    sellerType?: string;
    /**
     * Source domain of the listing
     */
    source?: string;
    /**
     * Stock number of car in dealers inventory
     */
    stockNo?: string;
    /**
     * title_type of the listing
     */
    titleType?: string;
    /**
     * Vehicle Details Page url of the specific car
     */
    vdpUrl?: string;
    /**
     * VIN for the car
     */
    vin?: string;
}
