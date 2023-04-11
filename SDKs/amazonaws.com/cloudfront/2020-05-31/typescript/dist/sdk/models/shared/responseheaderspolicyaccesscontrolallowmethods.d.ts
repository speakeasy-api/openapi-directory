import { SpeakeasyBase } from "../../../internal/utils";
import { AccessControlAllowMethodsListEnum } from "./accesscontrolallowmethodslistenum";
/**
 * <p>A list of HTTP methods that CloudFront includes as values for the <code>Access-Control-Allow-Methods</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Methods</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods">Access-Control-Allow-Methods</a> in the MDN Web Docs.</p>
 */
export declare class ResponseHeadersPolicyAccessControlAllowMethods extends SpeakeasyBase {
    items: AccessControlAllowMethodsListEnum[];
    quantity: number;
}
