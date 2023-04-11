import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalySubscription } from "./anomalysubscription";
/**
 * Success
 */
export declare class GetAnomalySubscriptionsResponse extends SpeakeasyBase {
    anomalySubscriptions: AnomalySubscription[];
    nextPageToken?: string;
}
