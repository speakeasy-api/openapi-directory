import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMerchantsMerchantIdApiCredentialsApiCredentialIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetMerchantsMerchantIdApiCredentialsApiCredentialIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the API credential.
     */
    apiCredentialId: string;
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
}
export declare class GetMerchantsMerchantIdApiCredentialsApiCredentialIdResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    apiCredential?: shared.ApiCredential;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
