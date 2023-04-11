import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationModeEnum } from "./evaluationmodeenum";
/**
 * Returns a filtered list of Detective or Proactive Config rules. By default, if the filter is not defined, this API returns an unfiltered list. For more information on Detective or Proactive Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html"> <b>Evaluation Mode</b> </a> in the Config Developer Guide.
 */
export declare class DescribeConfigRulesFilters extends SpeakeasyBase {
    evaluationMode?: EvaluationModeEnum;
}
