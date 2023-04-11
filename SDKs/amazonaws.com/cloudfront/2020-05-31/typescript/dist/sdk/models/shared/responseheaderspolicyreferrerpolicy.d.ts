import { SpeakeasyBase } from "../../../internal/utils";
import { ReferrerPolicyListEnum } from "./referrerpolicylistenum";
/**
 * <p>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header and the header's value.</p> <p>For more information about the <code>Referrer-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p>
 */
export declare class ResponseHeadersPolicyReferrerPolicy extends SpeakeasyBase {
    override: boolean;
    referrerPolicy: ReferrerPolicyListEnum;
}
