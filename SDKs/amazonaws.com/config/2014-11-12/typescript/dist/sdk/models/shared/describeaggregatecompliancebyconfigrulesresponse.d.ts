import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateComplianceByConfigRule } from "./aggregatecompliancebyconfigrule";
/**
 * Success
 */
export declare class DescribeAggregateComplianceByConfigRulesResponse extends SpeakeasyBase {
    aggregateComplianceByConfigRules?: AggregateComplianceByConfigRule[];
    nextToken?: string;
}
