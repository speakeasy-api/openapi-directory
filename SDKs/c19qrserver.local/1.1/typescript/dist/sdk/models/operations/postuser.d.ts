import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Create User Payload
 */
export declare class PostUserSample extends SpeakeasyBase {
    /**
     * If the user has admin privileges then the user will be able to create password reset requests on behalf of other users, and will also be able to view and edit  the data of other users.
     *
     * @remarks
     *
     */
    admin?: boolean;
    /**
     * The email address of the user record you want to create
     */
    email?: string;
    /**
     * The name of the user record you want to create
     */
    name?: string;
    /**
     * Not used in this version of the API. For future use.
     */
    readOnly?: boolean;
}
export declare class PostUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    createUserResponse?: shared.CreateUserResponse;
    /**
     * Unauthorized
     */
    invalidToken?: shared.InvalidToken;
}
