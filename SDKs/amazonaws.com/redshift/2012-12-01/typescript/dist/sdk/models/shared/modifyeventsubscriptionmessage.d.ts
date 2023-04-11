import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class ModifyEventSubscriptionMessage extends SpeakeasyBase {
    enabled?: boolean;
    eventCategories?: string[];
    severity?: string;
    snsTopicArn?: string;
    sourceIds?: string[];
    sourceType?: string;
    subscriptionName: string;
}
