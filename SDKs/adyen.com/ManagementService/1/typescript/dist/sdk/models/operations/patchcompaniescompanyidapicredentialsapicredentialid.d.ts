import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchCompaniesCompanyIdApiCredentialsApiCredentialIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PatchCompaniesCompanyIdApiCredentialsApiCredentialIdRequest extends SpeakeasyBase {
    updateCompanyApiCredentialRequest?: shared.UpdateCompanyApiCredentialRequest;
    /**
     * Unique identifier of the API credential.
     */
    apiCredentialId: string;
    /**
     * The unique identifier of the company account.
     */
    companyId: string;
}
export declare class PatchCompaniesCompanyIdApiCredentialsApiCredentialIdResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    companyApiCredential?: shared.CompanyApiCredential;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
