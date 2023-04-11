import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for CreateLBCookieStickinessPolicy.
 */
export declare class CreateLBCookieStickinessPolicyInput extends SpeakeasyBase {
    cookieExpirationPeriod?: number;
    loadBalancerName: string;
    policyName: string;
}
