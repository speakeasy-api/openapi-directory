import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLicenseVersionXAmzTargetEnum {
    AWSLicenseManagerCreateLicenseVersion = "AWSLicenseManager.CreateLicenseVersion"
}
export declare class CreateLicenseVersionRequest extends SpeakeasyBase {
    createLicenseVersionRequest: shared.CreateLicenseVersionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLicenseVersionXAmzTargetEnum;
}
export declare class CreateLicenseVersionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AuthorizationException
     */
    authorizationException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createLicenseVersionResponse?: shared.CreateLicenseVersionResponse;
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
     * ServerInternalException
     */
    serverInternalException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
