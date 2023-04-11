import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UserInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OAuth 2.0 error response
     */
    oAuth2Error?: shared.OAuth2Error;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UserInfo response
     */
    userInfo?: shared.UserInfo;
}
