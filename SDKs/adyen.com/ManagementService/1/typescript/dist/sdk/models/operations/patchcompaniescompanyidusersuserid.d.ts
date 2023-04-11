import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchCompaniesCompanyIdUsersUserIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PatchCompaniesCompanyIdUsersUserIdRequest extends SpeakeasyBase {
    updateCompanyUserRequest?: shared.UpdateCompanyUserRequest;
    /**
     * The unique identifier of the company account.
     */
    companyId: string;
    /**
     * The unique identifier of the user.
     */
    userId: string;
}
export declare class PatchCompaniesCompanyIdUsersUserIdResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    companyUser?: shared.CompanyUser;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
