import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyFeedbackTypeEnum } from "./anomalyfeedbacktypeenum";
export declare class ProvideAnomalyFeedbackRequest extends SpeakeasyBase {
    anomalyId: string;
    feedback: AnomalyFeedbackTypeEnum;
}
