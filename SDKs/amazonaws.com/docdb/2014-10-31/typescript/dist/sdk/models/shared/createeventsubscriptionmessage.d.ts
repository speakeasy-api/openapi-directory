import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input to <a>CreateEventSubscription</a>.
 */
export declare class CreateEventSubscriptionMessage extends SpeakeasyBase {
    enabled?: boolean;
    eventCategories?: string[];
    snsTopicArn: string;
    sourceIds?: string[];
    sourceType?: string;
    subscriptionName: string;
    tags?: TagList[];
}
