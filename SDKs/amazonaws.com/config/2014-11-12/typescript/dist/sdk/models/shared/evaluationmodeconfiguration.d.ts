import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationModeEnum } from "./evaluationmodeenum";
/**
 * The configuration object for Config rule evaluation mode. The Supported valid values are Detective or Proactive.
 */
export declare class EvaluationModeConfiguration extends SpeakeasyBase {
    mode?: EvaluationModeEnum;
}
