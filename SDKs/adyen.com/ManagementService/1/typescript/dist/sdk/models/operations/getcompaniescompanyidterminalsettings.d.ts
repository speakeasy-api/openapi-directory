import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompaniesCompanyIdTerminalSettingsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetCompaniesCompanyIdTerminalSettingsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the company account.
     */
    companyId: string;
}
export declare class GetCompaniesCompanyIdTerminalSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    /**
     * OK - the request has succeeded.
     */
    terminalSettings?: shared.TerminalSettings;
}
