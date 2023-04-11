import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Describes the configuration of a request to exchange an access code for a token.
 */
export declare class ExchangeCodeForTokenRequestBodyRequest extends SpeakeasyBase {
    code?: string;
    redirectUri?: string;
}
export declare class ExchangeCodeForTokenRequestBody extends SpeakeasyBase {
    /**
     * Describes the configuration of a request to exchange an access code for a token.
     */
    request: ExchangeCodeForTokenRequestBodyRequest;
}
/**
 * The third-party provider for the token. The only valid value is <code>figma</code>.
 */
export declare enum ExchangeCodeForTokenProviderEnum {
    Figma = "figma"
}
export declare class ExchangeCodeForTokenRequest extends SpeakeasyBase {
    requestBody: ExchangeCodeForTokenRequestBody;
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
    provider: ExchangeCodeForTokenProviderEnum;
}
export declare class ExchangeCodeForTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    exchangeCodeForTokenResponse?: shared.ExchangeCodeForTokenResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
