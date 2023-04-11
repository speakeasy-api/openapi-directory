import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserUserIdRequest extends SpeakeasyBase {
    /**
     * The ID of the user record to be retrieved.
     */
    userId: number;
}
export declare class GetUserUserIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    invalidToken?: shared.InvalidToken;
    /**
     * Success
     */
    userRecord?: shared.UserRecord;
}
