import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteApiV1WebhookSubscriptionsIdSecurity extends SpeakeasyBase {
    bearerHeader: string;
}
export declare class DeleteApiV1WebhookSubscriptionsIdRequest extends SpeakeasyBase {
    /**
     * The id of the webhook subscription to be retrieved
     */
    id: string;
}
export declare class DeleteApiV1WebhookSubscriptionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
