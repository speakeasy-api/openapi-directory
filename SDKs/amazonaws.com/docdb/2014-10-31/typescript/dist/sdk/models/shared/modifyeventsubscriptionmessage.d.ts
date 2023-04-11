import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input to <a>ModifyEventSubscription</a>.
 */
export declare class ModifyEventSubscriptionMessage extends SpeakeasyBase {
    enabled?: boolean;
    eventCategories?: string[];
    snsTopicArn?: string;
    sourceType?: string;
    subscriptionName: string;
}
