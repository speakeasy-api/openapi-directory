import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSigninSigninIdRequest extends SpeakeasyBase {
    /**
     * The ID of the signin record to be retrieved.
     */
    signinId: number;
}
export declare class GetSigninSigninIdResponse extends SpeakeasyBase {
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
    signin?: shared.Signin;
}
