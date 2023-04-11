import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateUserRequestBody extends SpeakeasyBase {
    /**
     * This param requires an api key in the request header
     *
     * @remarks
     * or it will be ignored
     */
    active?: boolean;
    approved?: boolean;
    email: string;
    externalIds?: Record<string, any>;
    name: string;
    password: string;
    userFields1?: boolean;
    username: string;
}
export declare class CreateUserRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    requestBody?: CreateUserRequestBody;
}
/**
 * user created
 */
export declare class CreateUser200ApplicationJSON extends SpeakeasyBase {
    active: boolean;
    message: string;
    success: boolean;
    userId?: number;
}
export declare class CreateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * user created
     */
    createUser200ApplicationJSONObject?: CreateUser200ApplicationJSON;
}
