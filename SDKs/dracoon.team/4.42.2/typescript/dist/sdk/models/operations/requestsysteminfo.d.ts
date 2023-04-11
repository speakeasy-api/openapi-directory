import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestSystemInfoRequest extends SpeakeasyBase {
    /**
     * Show only enabled authentication methods
     */
    isEnabled?: boolean;
}
export declare class RequestSystemInfoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    systemInfo?: shared.SystemInfo;
}
