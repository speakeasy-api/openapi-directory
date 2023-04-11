import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentInstrumentsIdRevealSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetPaymentInstrumentsIdRevealRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the payment instrument.
     */
    id: string;
}
export declare class GetPaymentInstrumentsIdRevealResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    paymentInstrumentRevealInfo?: shared.PaymentInstrumentRevealInfo;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
