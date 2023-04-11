import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateEvaluationResult } from "./aggregateevaluationresult";
/**
 * Success
 */
export declare class GetAggregateComplianceDetailsByConfigRuleResponse extends SpeakeasyBase {
    aggregateEvaluationResults?: AggregateEvaluationResult[];
    nextToken?: string;
}
