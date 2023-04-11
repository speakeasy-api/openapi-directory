import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeadersPolicyCorsConfig } from "./responseheaderspolicycorsconfig";
import { ResponseHeadersPolicyCustomHeadersConfig } from "./responseheaderspolicycustomheadersconfig";
import { ResponseHeadersPolicyRemoveHeadersConfig } from "./responseheaderspolicyremoveheadersconfig";
import { ResponseHeadersPolicySecurityHeadersConfig } from "./responseheaderspolicysecurityheadersconfig";
import { ResponseHeadersPolicyServerTimingHeadersConfig } from "./responseheaderspolicyservertimingheadersconfig";
/**
 * <p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>
 */
export declare class ResponseHeadersPolicyConfig extends SpeakeasyBase {
    comment?: string;
    corsConfig?: ResponseHeadersPolicyCorsConfig;
    customHeadersConfig?: ResponseHeadersPolicyCustomHeadersConfig;
    name: string;
    removeHeadersConfig?: ResponseHeadersPolicyRemoveHeadersConfig;
    securityHeadersConfig?: ResponseHeadersPolicySecurityHeadersConfig;
    serverTimingHeadersConfig?: ResponseHeadersPolicyServerTimingHeadersConfig;
}
