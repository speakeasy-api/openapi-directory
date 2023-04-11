import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRequest extends SpeakeasyBase {
    applePayInfo?: shared.ApplePayInfo;
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
    /**
     * The unique identifier of the payment method.
     */
    paymentMethodId: string;
}
export declare class PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
