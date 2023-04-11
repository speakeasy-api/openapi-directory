import { SpeakeasyBase } from "../../../internal/utils";
import { DescribeConfigRulesFilters } from "./describeconfigrulesfilters";
/**
 * <p/>
 */
export declare class DescribeConfigRulesRequest extends SpeakeasyBase {
    configRuleNames?: string[];
    filters?: DescribeConfigRulesFilters;
    nextToken?: string;
}
