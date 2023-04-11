import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestEventlogConfigRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class RequestEventlogConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    eventlogConfig?: shared.EventlogConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
