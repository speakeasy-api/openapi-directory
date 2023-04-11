import { SpeakeasyBase } from "../../../internal/utils";
import { RateLimit } from "./ratelimit";
/**
 * This complex type defines a list of rate-limit data as it pertains to a method within the specified version of an API.
 */
export declare class RateLimitsResponse extends SpeakeasyBase {
    /**
     * The rate-limit data for the specified APIs. The rate-limit data is returned for all the methods in the specified APIs and data pertains to the current time window.
     */
    rateLimits?: RateLimit[];
}
