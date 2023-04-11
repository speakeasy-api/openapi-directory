import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PingUserRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class PingUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    pingUser200TextPlainString?: string;
}
