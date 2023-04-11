import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityRuleResultStatusEnum } from "./dataqualityruleresultstatusenum";
/**
 * Describes the result of the evaluation of a data quality rule.
 */
export declare class DataQualityRuleResult extends SpeakeasyBase {
    description?: string;
    evaluationMessage?: string;
    name?: string;
    result?: DataQualityRuleResultStatusEnum;
}
