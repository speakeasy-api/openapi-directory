import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Determines whether CloudFront includes the <code>X-XSS-Protection</code> HTTP response header and the header's value.</p> <p>For more information about the <code>X-XSS-Protection</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
 */
export declare class ResponseHeadersPolicyXSSProtection extends SpeakeasyBase {
    modeBlock?: boolean;
    override: boolean;
    protection: boolean;
    reportUri?: string;
}
