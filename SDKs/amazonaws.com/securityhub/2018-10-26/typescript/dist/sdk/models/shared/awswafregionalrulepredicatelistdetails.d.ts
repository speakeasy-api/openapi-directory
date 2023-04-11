import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides details about the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>, <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.
 */
export declare class AwsWafRegionalRulePredicateListDetails extends SpeakeasyBase {
    dataId?: string;
    negated?: boolean;
    type?: string;
}
