import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompaniesCompanyIdUsersSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetCompaniesCompanyIdUsersRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the company account.
     */
    companyId: string;
    /**
     * The number of the page to return.
     */
    pageNumber?: number;
    /**
     * The number of items to have on a page. Maximum value is **100**. The default is **10** items on a page.
     */
    pageSize?: number;
    /**
     * The partial or complete username to select all users that match.
     */
    username?: string;
}
export declare class GetCompaniesCompanyIdUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    listCompanyUsersResponse?: shared.ListCompanyUsersResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
