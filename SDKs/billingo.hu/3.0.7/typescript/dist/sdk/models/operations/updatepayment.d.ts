import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePaymentRequest extends SpeakeasyBase {
    /**
     * Payment history object that you would like to update.
     */
    requestBody: shared.PaymentHistory[];
    id: number;
}
export declare class UpdatePaymentResponse extends SpeakeasyBase {
    /**
     * The request is malformed.
     */
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Payment history updated successfully.
     */
    paymentHistories?: shared.PaymentHistory[];
    /**
     * Internal server error.
     */
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Validation errors occured.
     */
    validationErrorResponse?: shared.ValidationErrorResponse;
}
