import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiV1WebhookSubscriptionsSecurity extends SpeakeasyBase {
    bearerHeader: string;
}
export declare class PostApiV1WebhookSubscriptionsRequestBodyDataAttributes extends SpeakeasyBase {
    subscribedEvents?: any[];
    url: string;
}
export declare class PostApiV1WebhookSubscriptionsRequestBodyData extends SpeakeasyBase {
    attributes: PostApiV1WebhookSubscriptionsRequestBodyDataAttributes;
}
export declare class PostApiV1WebhookSubscriptionsRequestBody extends SpeakeasyBase {
    data: PostApiV1WebhookSubscriptionsRequestBodyData;
}
export declare class PostApiV1WebhookSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
