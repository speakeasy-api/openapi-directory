import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompaniesCompanyIdTerminalActionsActionIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetCompaniesCompanyIdTerminalActionsActionIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the terminal action.
     */
    actionId: string;
    /**
     * The unique identifier of the company account.
     */
    companyId: string;
}
export declare class GetCompaniesCompanyIdTerminalActionsActionIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    externalTerminalAction?: shared.ExternalTerminalAction;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
