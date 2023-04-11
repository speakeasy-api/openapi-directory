import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An HTTP response header name and its value. CloudFront includes this header in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.
 */
export declare class ResponseHeadersPolicyCustomHeaderList extends SpeakeasyBase {
    header: string;
    override: boolean;
    value: string;
}
