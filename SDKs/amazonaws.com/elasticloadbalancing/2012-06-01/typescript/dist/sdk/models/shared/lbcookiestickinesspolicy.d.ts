import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a policy for duration-based session stickiness.
 */
export declare class LBCookieStickinessPolicy extends SpeakeasyBase {
    cookieExpirationPeriod?: number;
    policyName?: string;
}
