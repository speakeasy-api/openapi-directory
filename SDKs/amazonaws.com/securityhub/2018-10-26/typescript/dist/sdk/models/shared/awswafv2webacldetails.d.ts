import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafv2RulesDetails } from "./awswafv2rulesdetails";
import { AwsWafv2VisibilityConfigDetails } from "./awswafv2visibilityconfigdetails";
import { AwsWafv2WebAclActionDetails } from "./awswafv2webaclactiondetails";
import { AwsWafv2WebAclCaptchaConfigDetails } from "./awswafv2webaclcaptchaconfigdetails";
/**
 *  Details about an WAFv2 web Access Control List (ACL).
 */
export declare class AwsWafv2WebAclDetails extends SpeakeasyBase {
    arn?: string;
    capacity?: number;
    captchaConfig?: AwsWafv2WebAclCaptchaConfigDetails;
    defaultAction?: AwsWafv2WebAclActionDetails;
    description?: string;
    id?: string;
    managedbyFirewallManager?: boolean;
    name?: string;
    rules?: AwsWafv2RulesDetails[];
    visibilityConfig?: AwsWafv2VisibilityConfigDetails;
}
