import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Describes a refresh token.
 */
export declare class RefreshTokenRequestBodyRefreshTokenBody extends SpeakeasyBase {
    token?: string;
}
export declare class RefreshTokenRequestBody extends SpeakeasyBase {
    /**
     * Describes a refresh token.
     */
    refreshTokenBody: RefreshTokenRequestBodyRefreshTokenBody;
}
/**
 * The third-party provider for the token. The only valid value is <code>figma</code>.
 */
export declare enum RefreshTokenProviderEnum {
    Figma = "figma"
}
export declare class RefreshTokenRequest extends SpeakeasyBase {
    requestBody: RefreshTokenRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The third-party provider for the token. The only valid value is <code>figma</code>.
     */
    provider: RefreshTokenProviderEnum;
}
export declare class RefreshTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    refreshTokenResponse?: shared.RefreshTokenResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
