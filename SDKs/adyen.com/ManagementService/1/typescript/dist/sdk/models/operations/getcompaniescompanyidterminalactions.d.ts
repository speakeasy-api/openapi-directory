import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompaniesCompanyIdTerminalActionsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetCompaniesCompanyIdTerminalActionsRequest extends SpeakeasyBase {
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
    /**
     * Returns terminal actions with the specified status.
     *
     * @remarks
     * Allowed values: **pending**, **successful**, **failed**, **cancelled**, **tryLater**.
     */
    status?: string;
    /**
     * Returns terminal actions of the specified type.
     *
     * @remarks
     * Allowed values: **InstallAndroidApp**, **UninstallAndroidApp**, **InstallAndroidCertificate**, **UninstallAndroidCertificate**.
     */
    type?: string;
}
export declare class GetCompaniesCompanyIdTerminalActionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    listExternalTerminalActionsResponse?: shared.ListExternalTerminalActionsResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
