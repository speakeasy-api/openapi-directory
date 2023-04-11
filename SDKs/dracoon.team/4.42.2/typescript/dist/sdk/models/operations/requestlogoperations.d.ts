import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestLogOperationsRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Show only deprecated operations
     */
    isDeprecated?: boolean;
}
export declare class RequestLogOperationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    logOperationList?: shared.LogOperationList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
