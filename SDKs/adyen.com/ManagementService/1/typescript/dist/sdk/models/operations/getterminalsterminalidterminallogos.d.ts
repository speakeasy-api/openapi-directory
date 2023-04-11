import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTerminalsTerminalIdTerminalLogosSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetTerminalsTerminalIdTerminalLogosRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the payment terminal.
     */
    terminalId: string;
}
export declare class GetTerminalsTerminalIdTerminalLogosResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    logo?: shared.Logo;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
