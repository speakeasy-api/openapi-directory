import { SpeakeasyBase } from "../../../internal/utils";
/**
 * night life category
 */
export declare class CategoryRatedAreasCategoryScoresNightLife extends SpeakeasyBase {
    /**
     * score of nigh life possibility from 0 (nothing to do at night) to 100 (many night activities to enjoy)
     */
    overall?: number;
}
/**
 * restaurant category
 */
export declare class CategoryRatedAreasCategoryScoresRestaurant extends SpeakeasyBase {
    /**
     * score of eating possibility from 0 (no place to eat) to 100 (many restaurants to enjoy)
     */
    overall?: number;
    /**
     * score of vegetatian eating possibility from 0 (no place to eat vegetatian) to 100 (many restaurants to enjoy)
     */
    vegetarian?: number;
}
/**
 * shopping category
 */
export declare class CategoryRatedAreasCategoryScoresShopping extends SpeakeasyBase {
    /**
     * score of luxury shopping possibility from 0 (no luxury shop) to 100 (many luxury shops to enjoy)
     */
    luxury?: number;
    /**
     * score of shopping possibility from 0 (no shop) to 100 (many shops to enjoy)
     */
    overall?: number;
}
/**
 * sight category
 */
export declare class CategoryRatedAreasCategoryScoresSight extends SpeakeasyBase {
    /**
     * score of outdoor activity possibility from 0 (no outdoor spaces) to 100 (many parks or beaches to enjoy)
     */
    beachAndPark?: number;
    /**
     * score of historical discovery possibility from 0 (no historical site) to 100 (many historical site to enjoy)
     */
    historical?: number;
    /**
     * score of sight seeing possibility from 0 (nothing to see) to 100 (many sceneries to enjoy)
     */
    overall?: number;
}
/**
 * category scoring of the location
 */
export declare class CategoryRatedAreasCategoryScores extends SpeakeasyBase {
    /**
     * night life category
     */
    nightLife?: CategoryRatedAreasCategoryScoresNightLife;
    /**
     * restaurant category
     */
    restaurant?: CategoryRatedAreasCategoryScoresRestaurant;
    /**
     * shopping category
     */
    shopping?: CategoryRatedAreasCategoryScoresShopping;
    /**
     * sight category
     */
    sight?: CategoryRatedAreasCategoryScoresSight;
}
/**
 * Geographic coordinates describing the position of any location on the surface of Earth
 */
export declare class CategoryRatedAreasGeoCode extends SpeakeasyBase {
    /**
     * Latitude of the position expressed in decimal degrees (WSG 84), e.g. 6.244203. A positive value denotes northern hemisphere or the equator, and a negative value denotes southern hemisphere. The number of digits to represent the precision of the coordinate.
     */
    latitude?: number;
    /**
     * Longitude of the position expressed in decimal degrees (WSG 84), e.g. -75.581211. A positive value denotes east longitude or the prime meridian, and a negative value denotes west longitude.  The number of digits to represent the precision of the coordinate.
     */
    longitude?: number;
}
/**
 * Identification of a specific version of a resource
 */
export declare class CategoryRatedAreas extends SpeakeasyBase {
    /**
     * category scoring of the location
     */
    categoryScores?: CategoryRatedAreasCategoryScores;
    /**
     * Geographic coordinates describing the position of any location on the surface of Earth
     */
    geoCode?: CategoryRatedAreasGeoCode;
    /**
     * Radius of the area in meters
     */
    radius?: number;
    /**
     * Type of the manipulatd resource
     */
    type?: string;
}
