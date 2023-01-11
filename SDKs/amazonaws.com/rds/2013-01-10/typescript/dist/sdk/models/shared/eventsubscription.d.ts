import { SpeakeasyBase } from "../../../internal/utils";
export declare class EventSubscription extends SpeakeasyBase {
    custSubscriptionId?: string;
    customerAwsId?: string;
    enabled?: boolean;
    eventCategoriesList?: Record<string, any>[];
    id?: string;
    snsTopicArn?: string;
    sourceIdsList?: Record<string, any>[];
    sourceType?: string;
    status?: string;
    subscriptionCreationTime?: string;
}
