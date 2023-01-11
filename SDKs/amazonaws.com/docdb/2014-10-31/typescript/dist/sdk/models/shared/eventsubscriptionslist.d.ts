import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detailed information about an event to which you have subscribed.
**/
export declare class EventSubscriptionsList extends SpeakeasyBase {
    custSubscriptionId?: string;
    customerAwsId?: string;
    enabled?: boolean;
    eventCategoriesList?: Record<string, any>[];
    eventSubscriptionArn?: string;
    snsTopicArn?: string;
    sourceIdsList?: Record<string, any>[];
    sourceType?: string;
    status?: string;
    subscriptionCreationTime?: string;
}
