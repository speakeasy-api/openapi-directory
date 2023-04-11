import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountUpdateEmailSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AccountUpdateEmailRequestBody extends SpeakeasyBase {
    /**
     * User email.
     */
    email: string;
    /**
     * User password. Must be between 6 to 32 chars.
     */
    password: string;
}
export declare class AccountUpdateEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User
     */
    user?: shared.User;
}
