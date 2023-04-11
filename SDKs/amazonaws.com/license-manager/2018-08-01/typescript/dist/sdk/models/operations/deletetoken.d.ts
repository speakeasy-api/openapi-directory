import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTokenXAmzTargetEnum {
    AWSLicenseManagerDeleteToken = "AWSLicenseManager.DeleteToken"
}
export declare class DeleteTokenRequest extends SpeakeasyBase {
    deleteTokenRequest: shared.DeleteTokenRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTokenXAmzTargetEnum;
}
export declare class DeleteTokenResponse extends SpeakeasyBase {
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
    deleteTokenResponse?: Record<string, any>;
    /**
     * RateLimitExceededException
     */
    rateLimitExceededException?: any;
    /**
     * RedirectException
     */
    redirectException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
