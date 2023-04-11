import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails } from "./awswafv2webaclcaptchaconfigimmunitytimepropertydetails";
/**
 *  Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own <code>CaptchaConfig</code> settings.
 */
export declare class AwsWafv2WebAclCaptchaConfigDetails extends SpeakeasyBase {
    immunityTimeProperty?: AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails;
}
