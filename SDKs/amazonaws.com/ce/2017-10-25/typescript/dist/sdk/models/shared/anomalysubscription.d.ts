import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalySubscriptionFrequencyEnum } from "./anomalysubscriptionfrequencyenum";
import { Expression } from "./expression";
import { Subscriber } from "./subscriber";
/**
 * The association between a monitor, threshold, and list of subscribers used to deliver notifications about anomalies detected by a monitor that exceeds a threshold. The content consists of the detailed metadata and the current status of the <code>AnomalySubscription</code> object.
 */
export declare class AnomalySubscription extends SpeakeasyBase {
    accountId?: string;
    frequency: AnomalySubscriptionFrequencyEnum;
    monitorArnList: string[];
    subscribers: Subscriber[];
    subscriptionArn?: string;
    subscriptionName: string;
    threshold?: number;
    thresholdExpression?: Expression;
}
