import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountUpdateRecoverySecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AccountUpdateRecoveryRequestBody extends SpeakeasyBase {
    /**
     * New password. Must be between 6 to 32 chars.
     */
    password: string;
    /**
     * New password again. Must be between 6 to 32 chars.
     */
    passwordAgain: string;
    /**
     * Valid reset token.
     */
    secret: string;
    /**
     * User account UID address.
     */
    userId: string;
}
export declare class AccountUpdateRecoveryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Token
     */
    token?: shared.Token;
}
