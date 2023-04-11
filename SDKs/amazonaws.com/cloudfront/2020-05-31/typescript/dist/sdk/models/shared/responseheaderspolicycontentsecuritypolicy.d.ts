import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The policy directives and their values that CloudFront includes as values for the <code>Content-Security-Policy</code> HTTP response header.</p> <p>For more information about the <code>Content-Security-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a> in the MDN Web Docs.</p>
 */
export declare class ResponseHeadersPolicyContentSecurityPolicy extends SpeakeasyBase {
    contentSecurityPolicy: string;
    override: boolean;
}
