import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Used for CAPTCHA and challenge token settings. Determines how long a CAPTCHA or challenge timestamp remains valid after WAF updates it for a successful CAPTCHA or challenge response.
 */
export declare class AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails extends SpeakeasyBase {
    immunityTime?: number;
}
