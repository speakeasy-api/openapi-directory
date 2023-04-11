import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalySubscription } from "./anomalysubscription";
import { ResourceTag } from "./resourcetag";
export declare class CreateAnomalySubscriptionRequest extends SpeakeasyBase {
    anomalySubscription: AnomalySubscription;
    resourceTags?: ResourceTag[];
}
