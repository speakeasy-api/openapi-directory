import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrgsRedeliverWebhookDeliveryRequest extends SpeakeasyBase {
    deliveryId: number;
    /**
     * The unique identifier of the hook.
     */
    hookId: number;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class OrgsRedeliverWebhookDeliveryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Accepted
     */
    orgsRedeliverWebhookDelivery202ApplicationJSONObject?: Record<string, any>;
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
