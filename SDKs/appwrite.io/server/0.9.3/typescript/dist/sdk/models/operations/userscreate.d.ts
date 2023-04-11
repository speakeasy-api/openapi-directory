import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersCreateSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class UsersCreateRequestBody extends SpeakeasyBase {
    /**
     * User email.
     */
    email: string;
    /**
     * User name. Max length: 128 chars.
     */
    name?: string;
    /**
     * User password. Must be between 6 to 32 chars.
     */
    password: string;
}
export declare class UsersCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User
     */
    user?: shared.User;
}
