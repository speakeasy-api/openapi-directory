import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTerminalsTerminalIdTerminalSettingsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetTerminalsTerminalIdTerminalSettingsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the payment terminal.
     */
    terminalId: string;
}
export declare class GetTerminalsTerminalIdTerminalSettingsResponse extends SpeakeasyBase {
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
