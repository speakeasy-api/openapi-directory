import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A list of HTTP header names that CloudFront includes as values for the <code>Access-Control-Allow-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers">Access-Control-Allow-Headers</a> in the MDN Web Docs.</p>
 */
export declare class ResponseHeadersPolicyAccessControlAllowHeaders extends SpeakeasyBase {
    items: string[];
    quantity: number;
}
