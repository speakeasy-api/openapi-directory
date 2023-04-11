import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostGetTerminalDetailsSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class PostGetTerminalDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    getTerminalDetailsResponse?: shared.GetTerminalDetailsResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
