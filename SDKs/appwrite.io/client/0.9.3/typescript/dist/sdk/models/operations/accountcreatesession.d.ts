import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountCreateSessionSecurity extends SpeakeasyBase {
    project: string;
}
export declare class AccountCreateSessionRequestBody extends SpeakeasyBase {
    /**
     * User email.
     */
    email: string;
    /**
     * User password. Must be between 6 to 32 chars.
     */
    password: string;
}
export declare class AccountCreateSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Session
     */
    session?: shared.Session;
}
