import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Indicates how you're authenticating your request
 */
export declare enum PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum {
    Password = "password",
    RefreshToken = "refresh_token"
}
/**
 * Currently limited to Order Management System
 */
export declare enum PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum {
    Oms = "oms"
}
export declare class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3 extends SpeakeasyBase {
    /**
     * Id and secret provided by FDC
     */
    clientId: string;
    clientSecret: string;
    /**
     * Indicates how you're authenticating your request
     */
    grantType: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum;
    /**
     * You may request future tokens with the `refresh_token` from your previous `/oauth/access_token` request
     */
    refreshToken: string;
    /**
     * Currently limited to Order Management System
     */
    scope: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum;
}
export declare class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2 extends SpeakeasyBase {
    /**
     * Id and secret provided by FDC
     */
    clientId: string;
    clientSecret: string;
    /**
     * Indicates how you're authenticating your request
     */
    grantType: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum;
    password: string;
    /**
     * Currently limited to Order Management System
     */
    scope: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum;
    username: string;
}
/**
 * Authorized
 */
export declare class PostOauthAccessTokenAccessTokenResponseV2 extends SpeakeasyBase {
    accessToken?: string;
    expiresIn?: number;
    refreshToken?: string;
    tokenType?: string;
}
export declare class PostOauthAccessTokenResponse extends SpeakeasyBase {
    /**
     * Authorized
     */
    accessTokenResponseV2?: PostOauthAccessTokenAccessTokenResponseV2;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
}
