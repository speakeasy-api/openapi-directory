import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteWebhookRequest extends SpeakeasyBase {
    /**
     * An Id of a webhook
     */
    id: number;
}
export declare class DeleteWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
