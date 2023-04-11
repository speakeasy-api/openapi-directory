import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMerchantsMerchantIdApiCredentialsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostMerchantsMerchantIdApiCredentialsRequest extends SpeakeasyBase {
    createMerchantApiCredentialRequest?: shared.CreateMerchantApiCredentialRequest;
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
}
export declare class PostMerchantsMerchantIdApiCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    createApiCredentialResponse?: shared.CreateApiCredentialResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
