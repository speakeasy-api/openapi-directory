import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeySecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the API credential.
     */
    apiCredentialId: string;
    /**
     * The unique identifier of the company account.
     */
    companyId: string;
}
export declare class PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    generateApiKeyResponse?: shared.GenerateApiKeyResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
