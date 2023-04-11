import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteLicenseManagerReportGeneratorXAmzTargetEnum {
    AWSLicenseManagerDeleteLicenseManagerReportGenerator = "AWSLicenseManager.DeleteLicenseManagerReportGenerator"
}
export declare class DeleteLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
    deleteLicenseManagerReportGeneratorRequest: shared.DeleteLicenseManagerReportGeneratorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLicenseManagerReportGeneratorXAmzTargetEnum;
}
export declare class DeleteLicenseManagerReportGeneratorResponse extends SpeakeasyBase {
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
    deleteLicenseManagerReportGeneratorResponse?: Record<string, any>;
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
