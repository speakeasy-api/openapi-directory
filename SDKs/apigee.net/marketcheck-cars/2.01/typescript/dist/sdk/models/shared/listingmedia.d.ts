import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ListingMedia for the given listing id
 */
export declare class ListingMedia extends SpeakeasyBase {
    /**
     * Unique identifier representing a specific listing from the Marketcheck database
     */
    id?: string;
    /**
     * A list of photo urls for the car
     */
    photoLinks?: string[];
    /**
     * Single photo url of the car
     */
    photoUrl?: string;
}
