import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the API credential.
     */
    apiCredentialId: string;
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
}
export declare class GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    allowedOriginsResponse?: shared.AllowedOriginsResponse;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
