import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentInstrumentsIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetPaymentInstrumentsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the payment instrument.
     */
    id: string;
}
export declare class GetPaymentInstrumentsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    paymentInstrument?: shared.PaymentInstrument;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
