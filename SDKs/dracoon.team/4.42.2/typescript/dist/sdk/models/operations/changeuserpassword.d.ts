import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeUserPasswordRequest extends SpeakeasyBase {
    changeUserPasswordRequest: shared.ChangeUserPasswordRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class ChangeUserPasswordResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    changeUserPassword400ApplicationJSONOneOf?: any;
}
