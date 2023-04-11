import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LogOutUserRequest extends SpeakeasyBase {
    id: number;
}
/**
 * response
 */
export declare class LogOutUser200ApplicationJSON extends SpeakeasyBase {
    success: string;
}
export declare class LogOutUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * response
     */
    logOutUser200ApplicationJSONObject?: LogOutUser200ApplicationJSON;
}
