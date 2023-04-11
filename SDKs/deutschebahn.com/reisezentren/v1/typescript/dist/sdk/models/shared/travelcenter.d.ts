import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Opening times of the travel center, ordered by week day
 */
export declare class TravelCenterOpeningTimes extends SpeakeasyBase {
    fri?: string[];
    mon?: string[];
    sat?: string[];
    sun?: string[];
    thu?: string[];
    tue?: string[];
    wed?: string[];
}
/**
 * Type of travel center
 */
export declare enum TravelCenterTypeEnum {
    Reisezentrum = "Reisezentrum",
    MobilityCenter = "Mobility Center"
}
/**
 * A station was found
 */
export declare class TravelCenter extends SpeakeasyBase {
    /**
     * Street address of travel center
     */
    address?: string;
    /**
     * City of travel center
     */
    city?: string;
    /**
     * Identifying number
     */
    id?: number;
    /**
     * Latitude of travel center location
     */
    lat?: number;
    /**
     * Longitude of travel center location
     */
    lon?: number;
    /**
     * Name of travel center
     */
    name?: string;
    /**
     * Opening times of the travel center, ordered by week day
     */
    openingTimes?: TravelCenterOpeningTimes;
    /**
     * Post code of travel center
     */
    postCode?: string;
    /**
     * Type of travel center
     */
    type?: TravelCenterTypeEnum;
}
