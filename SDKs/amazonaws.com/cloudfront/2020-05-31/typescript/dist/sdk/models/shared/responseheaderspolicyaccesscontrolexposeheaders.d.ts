import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A list of HTTP headers that CloudFront includes as values for the <code>Access-Control-Expose-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Expose-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers">Access-Control-Expose-Headers</a> in the MDN Web Docs.</p>
 */
export declare class ResponseHeadersPolicyAccessControlExposeHeaders extends SpeakeasyBase {
    items?: string[];
    quantity: number;
}
