import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateEventSubscriptionMessage extends SpeakeasyBase {
    enabled?: boolean;
    eventCategories?: string[];
    snsTopicArn: string;
    sourceIds?: string[];
    sourceType?: string;
    subscriptionName: string;
}
