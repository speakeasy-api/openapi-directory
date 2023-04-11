import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompaniesSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetCompaniesRequest extends SpeakeasyBase {
    /**
     * The number of the page to fetch.
     */
    pageNumber?: number;
    /**
     * The number of items to have on a page, maximum 100. The default is 10 items on a page.
     */
    pageSize?: number;
}
export declare class GetCompaniesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    listCompanyResponse?: shared.ListCompanyResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
