import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsRedeliverWebhookDeliveryRequest extends SpeakeasyBase {
    deliveryId: number;
}
export declare class AppsRedeliverWebhookDeliveryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Accepted
     */
    appsRedeliverWebhookDelivery202ApplicationJSONObject?: Record<string, any>;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
