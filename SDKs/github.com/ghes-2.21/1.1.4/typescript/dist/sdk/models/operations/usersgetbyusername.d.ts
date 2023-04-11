import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersGetByUsernameRequest extends SpeakeasyBase {
    username: string;
}
export declare class UsersGetByUsernameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    usersGetByUsername200ApplicationJSONOneOf?: any;
    /**
     * Accepted
     */
    usersGetByUsername202ApplicationJSONObject?: Record<string, any>;
}
