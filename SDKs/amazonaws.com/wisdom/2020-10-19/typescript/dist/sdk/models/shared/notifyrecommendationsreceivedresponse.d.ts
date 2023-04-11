import { SpeakeasyBase } from "../../../internal/utils";
import { NotifyRecommendationsReceivedError } from "./notifyrecommendationsreceivederror";
/**
 * Success
 */
export declare class NotifyRecommendationsReceivedResponse extends SpeakeasyBase {
    errors?: NotifyRecommendationsReceivedError[];
    recommendationIds?: string[];
}
