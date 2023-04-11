import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the API credential.
     */
    apiCredentialId: string;
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
    /**
     * Unique identifier of the allowed origin.
     */
    originId: string;
}
export declare class DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
