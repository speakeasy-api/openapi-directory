import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountCreateSecurity extends SpeakeasyBase {
    project: string;
}
export declare class AccountCreateRequestBody extends SpeakeasyBase {
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
export declare class AccountCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User
     */
    user?: shared.User;
}
