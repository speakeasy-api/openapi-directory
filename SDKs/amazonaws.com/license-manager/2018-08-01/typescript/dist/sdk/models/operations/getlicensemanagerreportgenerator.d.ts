import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLicenseManagerReportGeneratorXAmzTargetEnum {
    AWSLicenseManagerGetLicenseManagerReportGenerator = "AWSLicenseManager.GetLicenseManagerReportGenerator"
}
export declare class GetLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
    getLicenseManagerReportGeneratorRequest: shared.GetLicenseManagerReportGeneratorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLicenseManagerReportGeneratorXAmzTargetEnum;
}
export declare class GetLicenseManagerReportGeneratorResponse extends SpeakeasyBase {
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
    getLicenseManagerReportGeneratorResponse?: shared.GetLicenseManagerReportGeneratorResponse;
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
