import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLicenseManagerReportGeneratorsXAmzTargetEnum {
    AWSLicenseManagerListLicenseManagerReportGenerators = "AWSLicenseManager.ListLicenseManagerReportGenerators"
}
export declare class ListLicenseManagerReportGeneratorsRequest extends SpeakeasyBase {
    listLicenseManagerReportGeneratorsRequest: shared.ListLicenseManagerReportGeneratorsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLicenseManagerReportGeneratorsXAmzTargetEnum;
}
export declare class ListLicenseManagerReportGeneratorsResponse extends SpeakeasyBase {
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
     * Success
     */
    listLicenseManagerReportGeneratorsResponse?: shared.ListLicenseManagerReportGeneratorsResponse;
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
