import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CheckInLicenseXAmzTargetEnum {
    AWSLicenseManagerCheckInLicense = "AWSLicenseManager.CheckInLicense"
}
export declare class CheckInLicenseRequest extends SpeakeasyBase {
    checkInLicenseRequest: shared.CheckInLicenseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CheckInLicenseXAmzTargetEnum;
}
export declare class CheckInLicenseResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AuthorizationException
     */
    authorizationException?: any;
    /**
     * Success
     */
    checkInLicenseResponse?: Record<string, any>;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * RateLimitExceededException
     */
    rateLimitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
