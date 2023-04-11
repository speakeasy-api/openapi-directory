import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Determines whether CloudFront includes the <code>Strict-Transport-Security</code> HTTP response header and the header's value.</p> <p>For more information about the <code>Strict-Transport-Security</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> in the MDN Web Docs.</p>
 */
export declare class ResponseHeadersPolicyStrictTransportSecurity extends SpeakeasyBase {
    accessControlMaxAgeSec: number;
    includeSubdomains?: boolean;
    override: boolean;
    preload?: boolean;
}
