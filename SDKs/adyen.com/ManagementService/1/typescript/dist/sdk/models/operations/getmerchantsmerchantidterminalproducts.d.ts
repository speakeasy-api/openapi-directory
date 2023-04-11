import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMerchantsMerchantIdTerminalProductsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetMerchantsMerchantIdTerminalProductsRequest extends SpeakeasyBase {
    /**
     * The country to return products for, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **US**
     */
    country: string;
    /**
     * The number of products to return.
     */
    limit?: number;
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
    /**
     * The number of products to skip.
     */
    offset?: number;
    /**
     * The terminal model to return products for. Use the ID returned in the [GET `/terminalModels`](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/merchants/{merchantId}/terminalModels) response. For example, **Verifone.M400**
     */
    terminalModelId?: string;
}
export declare class GetMerchantsMerchantIdTerminalProductsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    /**
     * OK - the request has succeeded.
     */
    terminalProductsResponse?: shared.TerminalProductsResponse;
}
