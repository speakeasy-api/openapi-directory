import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1WebhookSubscriptionsIdSecurity extends SpeakeasyBase {
    bearerHeader: string;
}
export declare class GetApiV1WebhookSubscriptionsIdRequest extends SpeakeasyBase {
    /**
     * The id of the webhook subscription to be retrieved
     */
    id: string;
}
export declare class GetApiV1WebhookSubscriptionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
