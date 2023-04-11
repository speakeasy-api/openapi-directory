import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafv2CustomRequestHandlingDetails } from "./awswafv2customrequesthandlingdetails";
/**
 *  Specifies that WAF should run a CAPTCHA check against the request.
 */
export declare class AwsWafv2RulesActionCaptchaDetails extends SpeakeasyBase {
    customRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}
