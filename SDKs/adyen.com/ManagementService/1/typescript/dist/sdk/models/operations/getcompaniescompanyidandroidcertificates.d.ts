import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompaniesCompanyIdAndroidCertificatesSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetCompaniesCompanyIdAndroidCertificatesRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the company account.
     */
    companyId: string;
    /**
     * The number of the page to fetch.
     */
    pageNumber?: number;
    /**
     * The number of items to have on a page, maximum 100. The default is 20 items on a page.
     */
    pageSize?: number;
}
export declare class GetCompaniesCompanyIdAndroidCertificatesResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    androidCertificatesResponse?: shared.AndroidCertificatesResponse;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
