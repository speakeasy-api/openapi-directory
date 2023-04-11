import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationModeEnum } from "./evaluationmodeenum";
import { TimeWindow } from "./timewindow";
/**
 * Returns details of a resource evaluation based on the selected filter.
 */
export declare class ResourceEvaluationFilters extends SpeakeasyBase {
    evaluationContextIdentifier?: string;
    evaluationMode?: EvaluationModeEnum;
    timeWindow?: TimeWindow;
}
