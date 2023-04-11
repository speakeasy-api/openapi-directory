import { SpeakeasyBase } from "../../../internal/utils";
import { BehaviorModelTrainingSummary } from "./behaviormodeltrainingsummary";
/**
 * Success
 */
export declare class GetBehaviorModelTrainingSummariesResponse extends SpeakeasyBase {
    nextToken?: string;
    summaries?: BehaviorModelTrainingSummary[];
}
