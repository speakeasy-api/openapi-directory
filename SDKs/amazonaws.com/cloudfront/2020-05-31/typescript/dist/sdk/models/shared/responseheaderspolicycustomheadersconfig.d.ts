import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeadersPolicyCustomHeaderList } from "./responseheaderspolicycustomheaderlist";
/**
 * A list of HTTP response header names and their values. CloudFront includes these headers in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.
 */
export declare class ResponseHeadersPolicyCustomHeadersConfig extends SpeakeasyBase {
    items?: ResponseHeadersPolicyCustomHeaderList[];
    quantity: number;
}
