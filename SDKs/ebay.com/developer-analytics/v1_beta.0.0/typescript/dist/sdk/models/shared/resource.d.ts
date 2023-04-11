import { SpeakeasyBase } from "../../../internal/utils";
import { Rate } from "./rate";
/**
 * This complex type defines the resource (API method) and the current rate-limit data for that resource.
 */
export declare class Resource extends SpeakeasyBase {
    /**
     * The name of the resource (an API or an API method) to which the rate-limit data applies.
     */
    name?: string;
    /**
     * A list of rate-limit data, where each list element represents the rate-limit data for a specific resource.
     */
    rates?: Rate[];
}
