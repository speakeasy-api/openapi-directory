import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeletePaymentRequest extends SpeakeasyBase {
    id: number;
}
export declare class DeletePaymentResponse extends SpeakeasyBase {
    /**
     * The request is malformed.
     */
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Payment history deleted successfully.
     */
    paymentHistories?: shared.PaymentHistory[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Internal server error.
     */
    serverErrorResponse?: shared.ServerErrorResponse;
}
