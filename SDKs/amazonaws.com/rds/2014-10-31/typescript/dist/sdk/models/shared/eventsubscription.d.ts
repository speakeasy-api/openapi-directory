import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.
**/
export declare class EventSubscription extends SpeakeasyBase {
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
