import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    /**
     * A webhook object
     */
    webhookInput?: shared.WebhookInput;
    /**
     * An id of a webhook
     */
    id: number;
}
export declare class UpdateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
