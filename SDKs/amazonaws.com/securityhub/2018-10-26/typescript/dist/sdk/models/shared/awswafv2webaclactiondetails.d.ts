import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafv2ActionAllowDetails } from "./awswafv2actionallowdetails";
import { AwsWafv2ActionBlockDetails } from "./awswafv2actionblockdetails";
/**
 *  Specifies the action that Amazon CloudFront or WAF takes when a web request matches the conditions in the rule.
 */
export declare class AwsWafv2WebAclActionDetails extends SpeakeasyBase {
    allow?: AwsWafv2ActionAllowDetails;
    block?: AwsWafv2ActionBlockDetails;
}
