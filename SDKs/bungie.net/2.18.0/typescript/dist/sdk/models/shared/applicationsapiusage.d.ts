import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationsSeries } from "./applicationsseries";
export declare class ApplicationsApiUsage extends SpeakeasyBase {
    /**
     * Counts for on API calls made for the time range.
     */
    apiCalls?: ApplicationsSeries[];
    /**
     * Instances of blocked requests or requests that crossed the warn threshold during the time range.
     */
    throttledRequests?: ApplicationsSeries[];
}
