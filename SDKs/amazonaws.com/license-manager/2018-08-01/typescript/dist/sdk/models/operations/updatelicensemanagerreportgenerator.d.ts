import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateLicenseManagerReportGeneratorXAmzTargetEnum {
    AWSLicenseManagerUpdateLicenseManagerReportGenerator = "AWSLicenseManager.UpdateLicenseManagerReportGenerator"
}
export declare class UpdateLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
    updateLicenseManagerReportGeneratorRequest: shared.UpdateLicenseManagerReportGeneratorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLicenseManagerReportGeneratorXAmzTargetEnum;
}
export declare class UpdateLicenseManagerReportGeneratorResponse extends SpeakeasyBase {
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
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * RateLimitExceededException
     */
    rateLimitExceededException?: any;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
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
     * Success
     */
    updateLicenseManagerReportGeneratorResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
