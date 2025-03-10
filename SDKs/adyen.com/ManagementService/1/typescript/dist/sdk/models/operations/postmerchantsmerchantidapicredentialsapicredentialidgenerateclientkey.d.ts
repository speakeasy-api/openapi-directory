import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeySecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the API credential.
     */
    apiCredentialId: string;
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
}
export declare class PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    generateClientKeyResponse?: shared.GenerateClientKeyResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
