import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalySubscriptionFrequencyEnum } from "./anomalysubscriptionfrequencyenum";
import { Expression } from "./expression";
import { Subscriber } from "./subscriber";
export declare class UpdateAnomalySubscriptionRequest extends SpeakeasyBase {
    frequency?: AnomalySubscriptionFrequencyEnum;
    monitorArnList?: string[];
    subscribers?: Subscriber[];
    subscriptionArn: string;
    subscriptionName?: string;
    threshold?: number;
    thresholdExpression?: Expression;
}
