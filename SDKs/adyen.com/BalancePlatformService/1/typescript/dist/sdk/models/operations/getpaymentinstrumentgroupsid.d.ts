import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentInstrumentGroupsIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetPaymentInstrumentGroupsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the payment instrument group.
     */
    id: string;
}
export declare class GetPaymentInstrumentGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    paymentInstrumentGroup?: shared.PaymentInstrumentGroup;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
