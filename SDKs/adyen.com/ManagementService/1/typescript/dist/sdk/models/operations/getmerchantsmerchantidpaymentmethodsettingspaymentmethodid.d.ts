import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
    /**
     * The unique identifier of the payment method.
     */
    paymentMethodId: string;
}
export declare class GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    paymentMethod?: shared.PaymentMethod;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
