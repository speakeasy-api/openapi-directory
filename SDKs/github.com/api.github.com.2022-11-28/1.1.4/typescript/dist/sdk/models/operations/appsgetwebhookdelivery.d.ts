import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsGetWebhookDeliveryRequest extends SpeakeasyBase {
    deliveryId: number;
}
export declare class AppsGetWebhookDeliveryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    hookDelivery?: shared.HookDelivery;
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
