import { SpeakeasyBase } from "../../../internal/utils";
import { StateEnum } from "./stateenum";
/**
 * Provides a summary of the reference predictor used when retraining or upgrading a predictor.
 */
export declare class ReferencePredictorSummary extends SpeakeasyBase {
    arn?: string;
    state?: StateEnum;
}
