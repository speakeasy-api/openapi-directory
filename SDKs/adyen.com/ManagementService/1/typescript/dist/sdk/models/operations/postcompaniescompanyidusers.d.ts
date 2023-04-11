import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCompaniesCompanyIdUsersSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostCompaniesCompanyIdUsersRequest extends SpeakeasyBase {
    createCompanyUserRequest?: shared.CreateCompanyUserRequest;
    /**
     * The unique identifier of the company account.
     */
    companyId: string;
}
export declare class PostCompaniesCompanyIdUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    createCompanyUserResponse?: shared.CreateCompanyUserResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
