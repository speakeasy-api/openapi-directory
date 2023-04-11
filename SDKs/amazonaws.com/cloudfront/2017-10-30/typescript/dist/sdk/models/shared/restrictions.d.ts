import { SpeakeasyBase } from "../../../internal/utils";
import { GeoRestriction } from "./georestriction";
/**
 * A complex type that identifies ways in which you want to restrict distribution of your content.
 */
export declare class Restrictions extends SpeakeasyBase {
    /**
     * A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.
     */
    geoRestriction: GeoRestriction;
}
