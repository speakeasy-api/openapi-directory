import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLicenseManagerReportGeneratorXAmzTargetEnum {
    AWSLicenseManagerCreateLicenseManagerReportGenerator = "AWSLicenseManager.CreateLicenseManagerReportGenerator"
}
export declare class CreateLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
    createLicenseManagerReportGeneratorRequest: shared.CreateLicenseManagerReportGeneratorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLicenseManagerReportGeneratorXAmzTargetEnum;
}
export declare class CreateLicenseManagerReportGeneratorResponse extends SpeakeasyBase {
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
    createLicenseManagerReportGeneratorResponse?: shared.CreateLicenseManagerReportGeneratorResponse;
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
