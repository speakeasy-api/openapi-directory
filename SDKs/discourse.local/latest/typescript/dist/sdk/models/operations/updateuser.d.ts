import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateUserRequestBody extends SpeakeasyBase {
    email?: string;
    externalIds?: Record<string, any>;
    name?: string;
    password?: string;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    requestBody?: UpdateUserRequestBody;
    username: string;
}
/**
 * user updated
 */
export declare class UpdateUser200ApplicationJSON extends SpeakeasyBase {
    success: string;
    user: Record<string, any>;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * user updated
     */
    updateUser200ApplicationJSONObject?: UpdateUser200ApplicationJSON;
}
