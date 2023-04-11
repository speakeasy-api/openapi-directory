import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveTenantWebhookRequest extends SpeakeasyBase {
    /**
     * Service Authentication token
     */
    xSdsServiceToken?: string;
    /**
     * Webhook ID
     */
    webhookId: number;
}
export declare class RemoveTenantWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
