import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMerchantsMerchantIdPaymentMethodSettingsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetMerchantsMerchantIdPaymentMethodSettingsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the Business Line for which to return the payment methods.
     */
    businessLineId?: string;
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
    /**
     * The number of the page to fetch.
     */
    pageNumber?: number;
    /**
     * The number of items to have on a page, maximum 100. The default is 10 items on a page.
     */
    pageSize?: number;
    /**
     * The unique identifier of the store for which to return the payment methods.
     */
    storeId?: string;
}
export declare class GetMerchantsMerchantIdPaymentMethodSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    paymentMethodResponse?: shared.PaymentMethodResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
