import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafv2ActionAllowDetails } from "./awswafv2actionallowdetails";
import { AwsWafv2ActionBlockDetails } from "./awswafv2actionblockdetails";
import { AwsWafv2RulesActionCaptchaDetails } from "./awswafv2rulesactioncaptchadetails";
import { AwsWafv2RulesActionCountDetails } from "./awswafv2rulesactioncountdetails";
/**
 *  The action that WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting.
 */
export declare class AwsWafv2RulesActionDetails extends SpeakeasyBase {
    allow?: AwsWafv2ActionAllowDetails;
    block?: AwsWafv2ActionBlockDetails;
    captcha?: AwsWafv2RulesActionCaptchaDetails;
    count?: AwsWafv2RulesActionCountDetails;
}
