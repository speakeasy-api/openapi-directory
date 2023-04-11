import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeadersPolicyContentSecurityPolicy } from "./responseheaderspolicycontentsecuritypolicy";
import { ResponseHeadersPolicyContentTypeOptions } from "./responseheaderspolicycontenttypeoptions";
import { ResponseHeadersPolicyFrameOptions } from "./responseheaderspolicyframeoptions";
import { ResponseHeadersPolicyReferrerPolicy } from "./responseheaderspolicyreferrerpolicy";
import { ResponseHeadersPolicyStrictTransportSecurity } from "./responseheaderspolicystricttransportsecurity";
import { ResponseHeadersPolicyXSSProtection } from "./responseheaderspolicyxssprotection";
/**
 * A configuration for a set of security-related HTTP response headers. CloudFront adds these headers to HTTP responses that it sends for requests that match a cache behavior associated with this response headers policy.
 */
export declare class ResponseHeadersPolicySecurityHeadersConfig extends SpeakeasyBase {
    contentSecurityPolicy?: ResponseHeadersPolicyContentSecurityPolicy;
    contentTypeOptions?: ResponseHeadersPolicyContentTypeOptions;
    frameOptions?: ResponseHeadersPolicyFrameOptions;
    referrerPolicy?: ResponseHeadersPolicyReferrerPolicy;
    strictTransportSecurity?: ResponseHeadersPolicyStrictTransportSecurity;
    xssProtection?: ResponseHeadersPolicyXSSProtection;
}
