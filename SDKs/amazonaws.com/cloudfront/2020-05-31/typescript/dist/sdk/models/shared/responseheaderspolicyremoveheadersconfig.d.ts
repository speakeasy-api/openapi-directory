import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeadersPolicyRemoveHeaderList } from "./responseheaderspolicyremoveheaderlist";
/**
 * A list of HTTP header names that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.
 */
export declare class ResponseHeadersPolicyRemoveHeadersConfig extends SpeakeasyBase {
    items?: ResponseHeadersPolicyRemoveHeaderList[];
    quantity: number;
}
