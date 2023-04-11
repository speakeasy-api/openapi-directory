import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateEventSubscriptionActionEnum {
    CreateEventSubscription = "CreateEventSubscription"
}
export declare enum GETCreateEventSubscriptionVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETCreateEventSubscriptionRequest extends SpeakeasyBase {
    action: GETCreateEventSubscriptionActionEnum;
    enabled?: boolean;
    eventCategories?: string[];
    snsTopicArn: string;
    sourceIds?: string[];
    sourceType?: string;
    subscriptionName: string;
    version: GETCreateEventSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateEventSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
