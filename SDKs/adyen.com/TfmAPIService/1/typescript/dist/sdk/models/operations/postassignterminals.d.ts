import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostAssignTerminalsSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class PostAssignTerminalsResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    assignTerminalsResponse?: shared.AssignTerminalsResponse;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
