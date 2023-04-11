import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountUpdatePasswordSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AccountUpdatePasswordRequestBody extends SpeakeasyBase {
    /**
     * Old user password. Must be between 6 to 32 chars.
     */
    oldPassword?: string;
    /**
     * New user password. Must be between 6 to 32 chars.
     */
    password: string;
}
export declare class AccountUpdatePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User
     */
    user?: shared.User;
}
