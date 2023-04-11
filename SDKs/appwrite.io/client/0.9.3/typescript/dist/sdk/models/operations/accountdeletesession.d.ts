import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountDeleteSessionSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AccountDeleteSessionRequest extends SpeakeasyBase {
    /**
     * Session unique ID. Use the string 'current' to delete the current device session.
     */
    sessionId: string;
}
export declare class AccountDeleteSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
