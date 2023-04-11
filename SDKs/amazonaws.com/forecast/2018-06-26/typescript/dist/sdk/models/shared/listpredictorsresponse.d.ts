import { SpeakeasyBase } from "../../../internal/utils";
import { PredictorSummary } from "./predictorsummary";
/**
 * Success
 */
export declare class ListPredictorsResponse extends SpeakeasyBase {
    nextToken?: string;
    predictors?: PredictorSummary[];
}
