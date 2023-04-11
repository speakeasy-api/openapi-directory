import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RevokeTokenXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceRevokeToken = "AWSCognitoIdentityProviderService.RevokeToken"
}
export declare class RevokeTokenRequest extends SpeakeasyBase {
    revokeTokenRequest: shared.RevokeTokenRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RevokeTokenXAmzTargetEnum;
}
export declare class RevokeTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    revokeTokenResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
    /**
     * UnsupportedTokenTypeException
     */
    unsupportedTokenTypeException?: any;
}
