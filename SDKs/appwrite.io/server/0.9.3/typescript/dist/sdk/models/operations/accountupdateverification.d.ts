import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountUpdateVerificationSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AccountUpdateVerificationRequestBody extends SpeakeasyBase {
    /**
     * Valid verification token.
     */
    secret: string;
    /**
     * User unique ID.
     */
    userId: string;
}
export declare class AccountUpdateVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Token
     */
    token?: shared.Token;
}
