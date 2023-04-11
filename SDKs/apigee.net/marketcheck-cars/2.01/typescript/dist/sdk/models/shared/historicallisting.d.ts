import { SpeakeasyBase } from "../../../internal/utils";
import { ListingFinance } from "./listingfinance";
import { ListingLease } from "./listinglease";
/**
 * Represents a car history entry
 */
export declare class HistoricalListing extends SpeakeasyBase {
    /**
     * Flag to indicate whether listing is carfax_1_owner
     */
    carfax1Owner?: boolean;
    /**
     * Flag to indicate whether listing is carfax_clean_title
     */
    carfaxCleanTitle?: boolean;
    /**
     * City of the listing
     */
    city?: string;
    /**
     * Data source of the listing
     */
    dataSource?: string;
    /**
     * Unique MC assigned dealers id for the listing
     */
    dealerId?: number;
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
     * Flag to indicate listing is marked searchable or not
     */
    isSearchable?: string;
    /**
     * Listing last seen at (most recent) timestamp
     */
    lastSeenAt?: number;
    /**
     * Listing last seen at (most recent) date
     */
    lastSeenAtDate?: string;
    /**
     * Latitude of the listing
     */
    latitude?: string;
    /**
     * Array of all finance offers for this listing
     */
    leasingOptions?: ListingLease[];
    /**
     * Longitude of the listing
     */
    longitude?: string;
    /**
     * Odometer reading / reported miles usage for the car
     */
    miles?: number;
    /**
     * MSRP for the car
     */
    msrp?: number;
    /**
     * Asking price for the car
     */
    price?: number;
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
     * Seller name of the listing from the Marketcheck database
     */
    sellerName?: string;
    /**
     * Seller name of the listing from the Marketcheck database
     */
    sellerNameO?: string;
    /**
     * Seller type for the car
     */
    sellerType?: string;
    /**
     * Source domain of the listing
     */
    source?: string;
    /**
     * State of the listing
     */
    state?: string;
    /**
     * Timestamp of status date
     */
    statusDate?: number;
    /**
     * Stock number of car in dealers inventory
     */
    stockNo?: string;
    /**
     * Street of the listing
     */
    street?: string;
    /**
     * Trim of the car
     */
    trimR?: string;
    /**
     * Vehicle Details Page url of the specific car
     */
    vdpUrl?: string;
    /**
     * VIN for the car
     */
    vin?: string;
    /**
     * Zip of the listing
     */
    zip?: string;
}
