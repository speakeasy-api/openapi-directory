import { SpeakeasyBase } from "../../../internal/utils";
import { SamplingRuleRecord } from "./samplingrulerecord";
/**
 * Success
 */
export declare class GetSamplingRulesResult extends SpeakeasyBase {
    nextToken?: string;
    samplingRuleRecords?: SamplingRuleRecord[];
}
