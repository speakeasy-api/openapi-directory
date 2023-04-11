import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountGetSessionSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AccountGetSessionRequest extends SpeakeasyBase {
    /**
     * Session unique ID. Use the string 'current' to get the current device session.
     */
    sessionId: string;
}
export declare class AccountGetSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Session
     */
    session?: shared.Session;
}
