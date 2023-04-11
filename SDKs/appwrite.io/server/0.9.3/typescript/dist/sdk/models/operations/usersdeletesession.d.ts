import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersDeleteSessionSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class UsersDeleteSessionRequest extends SpeakeasyBase {
    /**
     * User unique session ID.
     */
    sessionId: string;
    /**
     * User unique ID.
     */
    userId: string;
}
export declare class UsersDeleteSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
