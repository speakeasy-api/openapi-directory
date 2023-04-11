import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCompaniesCompanyIdApiCredentialsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostCompaniesCompanyIdApiCredentialsRequest extends SpeakeasyBase {
    createCompanyApiCredentialRequest?: shared.CreateCompanyApiCredentialRequest;
    /**
     * The unique identifier of the company account.
     */
    companyId: string;
}
export declare class PostCompaniesCompanyIdApiCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    createCompanyApiCredentialResponse?: shared.CreateCompanyApiCredentialResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
