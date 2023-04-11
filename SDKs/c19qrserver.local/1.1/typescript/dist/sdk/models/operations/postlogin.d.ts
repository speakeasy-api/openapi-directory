import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PostLoginSampleSourceEnum {
    IOS = "iOS",
    Android = "android",
    Web = "web"
}
/**
 * The login payload
 */
export declare class PostLoginSample extends SpeakeasyBase {
    email?: string;
    password?: string;
    source?: PostLoginSampleSourceEnum;
}
export declare class PostLoginResponse extends SpeakeasyBase {
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
    loginResponse?: shared.LoginResponse;
}
