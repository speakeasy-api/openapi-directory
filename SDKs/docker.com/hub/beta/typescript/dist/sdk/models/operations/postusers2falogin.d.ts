import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsers2FALoginResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authentication failed or second factor required
     */
    postUsers2FALoginErrorResponse?: shared.PostUsers2FALoginErrorResponse;
    /**
     * Authentication successful
     */
    postUsersLoginSuccessResponse?: shared.PostUsersLoginSuccessResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
