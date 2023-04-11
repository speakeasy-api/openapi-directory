import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ListingAttributes for the given listing id
 */
export declare class ListingExtraAttributes extends SpeakeasyBase {
    /**
     * List of dealer added features available with the car
     */
    dealerAddedF?: string[];
    /**
     * List of electronic features available with the car
     */
    electronicsF?: string[];
    /**
     * List of exterior features available with the car
     */
    exteriorF?: string[];
    /**
     * List of Features available with the car
     */
    features?: string[];
    /**
     * Unique identifier representing a specific listing from the Marketcheck database
     */
    id?: string;
    /**
     * List of interior features available with the car
     */
    interiorF?: string[];
    /**
     * Installed Options of the car
     */
    options?: string[];
    /**
     * List of safety features available with the car
     */
    safetyF?: string[];
    /**
     * Seller comment for the car
     */
    sellerCmts?: string;
    /**
     * List of standard features available with the car
     */
    standardF?: string[];
    /**
     * List of technical features available with the car
     */
    technicalF?: string[];
}
