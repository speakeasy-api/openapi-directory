import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersLoginResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authentication failed or second factor required
     */
    postUsersLoginErrorResponse?: shared.PostUsersLoginErrorResponse;
    /**
     * Authentication successful
     */
    postUsersLoginSuccessResponse?: shared.PostUsersLoginSuccessResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
