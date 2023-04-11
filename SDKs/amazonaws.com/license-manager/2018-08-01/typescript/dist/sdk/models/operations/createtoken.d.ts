import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTokenXAmzTargetEnum {
    AWSLicenseManagerCreateToken = "AWSLicenseManager.CreateToken"
}
export declare class CreateTokenRequest extends SpeakeasyBase {
    createTokenRequest: shared.CreateTokenRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTokenXAmzTargetEnum;
}
export declare class CreateTokenResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AuthorizationException
     */
    authorizationException?: any;
    contentType: string;
    /**
     * Success
     */
    createTokenResponse?: shared.CreateTokenResponse;
    /**
     * RateLimitExceededException
     */
    rateLimitExceededException?: any;
    /**
     * RedirectException
     */
    redirectException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
