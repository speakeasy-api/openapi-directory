import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLicenseConversionTaskXAmzTargetEnum {
    AWSLicenseManagerGetLicenseConversionTask = "AWSLicenseManager.GetLicenseConversionTask"
}
export declare class GetLicenseConversionTaskRequest extends SpeakeasyBase {
    getLicenseConversionTaskRequest: shared.GetLicenseConversionTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLicenseConversionTaskXAmzTargetEnum;
}
export declare class GetLicenseConversionTaskResponse extends SpeakeasyBase {
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
    getLicenseConversionTaskResponse?: shared.GetLicenseConversionTaskResponse;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * RateLimitExceededException
     */
    rateLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
}
