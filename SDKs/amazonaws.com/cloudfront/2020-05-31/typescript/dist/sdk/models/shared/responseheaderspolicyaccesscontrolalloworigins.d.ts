import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A list of origins (domain names) that CloudFront can use as the value for the <code>Access-Control-Allow-Origin</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Origin</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin">Access-Control-Allow-Origin</a> in the MDN Web Docs.</p>
 */
export declare class ResponseHeadersPolicyAccessControlAllowOrigins extends SpeakeasyBase {
    items: string[];
    quantity: number;
}
