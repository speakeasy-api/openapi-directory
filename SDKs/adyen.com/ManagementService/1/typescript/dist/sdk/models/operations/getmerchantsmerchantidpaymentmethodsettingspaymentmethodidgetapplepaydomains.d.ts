import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
    /**
     * The unique identifier of the payment method.
     */
    paymentMethodId: string;
}
export declare class GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    applePayInfo?: shared.ApplePayInfo;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
