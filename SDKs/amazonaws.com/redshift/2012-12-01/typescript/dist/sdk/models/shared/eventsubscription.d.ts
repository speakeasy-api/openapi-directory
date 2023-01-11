import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Describes event subscriptions.
**/
export declare class EventSubscription extends SpeakeasyBase {
    custSubscriptionId?: string;
    customerAwsId?: string;
    enabled?: boolean;
    eventCategoriesList?: Record<string, any>[];
    severity?: string;
    snsTopicArn?: string;
    sourceIdsList?: Record<string, any>[];
    sourceType?: string;
    status?: string;
    subscriptionCreationTime?: Date;
    tags?: TagList[];
}
