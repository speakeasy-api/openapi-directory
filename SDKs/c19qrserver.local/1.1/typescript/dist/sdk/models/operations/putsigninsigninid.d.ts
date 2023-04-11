import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSigninSigninIdRequest extends SpeakeasyBase {
    signin?: shared.Signin;
    /**
     * The ID of the signin record to be retrieved.
     */
    signinId: number;
}
export declare class PutSigninSigninIdResponse extends SpeakeasyBase {
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
