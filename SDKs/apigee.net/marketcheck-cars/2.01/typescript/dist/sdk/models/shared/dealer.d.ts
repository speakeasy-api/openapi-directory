import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Dealer for the given id
 */
export declare class Dealer extends SpeakeasyBase {
    /**
     * City of the dealer
     */
    city?: string;
    /**
     * country of the dealer
     */
    country?: string;
    /**
     * Datasource of the dealer
     */
    dataSource?: string;
    /**
     * Type of dealer (franchise/independent)
     */
    dealerType?: string;
    /**
     * Dealership group name of dealer
     */
    dealershipGroupName?: string;
    /**
     * Distance of dealer from given location
     */
    distance?: number;
    /**
     * The unique id associated with the dealer in the Marketcheck database
     */
    id?: string;
    /**
     * Website of the dealer
     */
    inventoryUrl?: string;
    /**
     * Latutide for the dealer location
     */
    latitude?: string;
    /**
     * Listing count of the dealer
     */
    listingCount?: number;
    /**
     * location_ll for the dealer location
     */
    locationLl?: string;
    /**
     * Longitude for the dealer location
     */
    longitude?: string;
    /**
     * Contact email of the dealer
     */
    sellerEmail?: string;
    /**
     * Name of the dealer
     */
    sellerName?: string;
    /**
     * Contact no of the dealer
     */
    sellerPhone?: string;
    /**
     * State of the dealer
     */
    state?: string;
    /**
     * Status of the dealer
     */
    status?: string;
    /**
     * Street of the dealer
     */
    street?: string;
    /**
     * Zip of the dealer
     */
    zip?: string;
}
