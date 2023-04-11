import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSigninResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    invalidToken?: shared.InvalidToken;
    /**
     * Key Failure
     */
    keyFailure?: shared.KeyFailure;
    /**
     * Success
     */
    signinResponse?: shared.SigninResponse;
}
