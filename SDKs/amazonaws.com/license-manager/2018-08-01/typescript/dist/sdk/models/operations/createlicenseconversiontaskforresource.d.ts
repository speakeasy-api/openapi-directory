import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLicenseConversionTaskForResourceXAmzTargetEnum {
    AWSLicenseManagerCreateLicenseConversionTaskForResource = "AWSLicenseManager.CreateLicenseConversionTaskForResource"
}
export declare class CreateLicenseConversionTaskForResourceRequest extends SpeakeasyBase {
    createLicenseConversionTaskForResourceRequest: shared.CreateLicenseConversionTaskForResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLicenseConversionTaskForResourceXAmzTargetEnum;
}
export declare class CreateLicenseConversionTaskForResourceResponse extends SpeakeasyBase {
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
    createLicenseConversionTaskForResourceResponse?: shared.CreateLicenseConversionTaskForResourceResponse;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * RateLimitExceededException
     */
    rateLimitExceededException?: any;
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
