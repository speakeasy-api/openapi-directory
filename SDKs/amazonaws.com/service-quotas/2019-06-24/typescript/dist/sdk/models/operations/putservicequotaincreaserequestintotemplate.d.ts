import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum {
    ServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplate = "ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate"
}
export declare class PutServiceQuotaIncreaseRequestIntoTemplateRequest extends SpeakeasyBase {
    putServiceQuotaIncreaseRequestIntoTemplateRequest: shared.PutServiceQuotaIncreaseRequestIntoTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum;
}
export declare class PutServiceQuotaIncreaseRequestIntoTemplateResponse extends SpeakeasyBase {
    /**
     * AWSServiceAccessNotEnabledException
     */
    awsServiceAccessNotEnabledException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * DependencyAccessDeniedException
     */
    dependencyAccessDeniedException?: any;
    /**
     * IllegalArgumentException
     */
    illegalArgumentException?: any;
    /**
     * NoAvailableOrganizationException
     */
    noAvailableOrganizationException?: any;
    /**
     * NoSuchResourceException
     */
    noSuchResourceException?: any;
    /**
     * Success
     */
    putServiceQuotaIncreaseRequestIntoTemplateResponse?: shared.PutServiceQuotaIncreaseRequestIntoTemplateResponse;
    /**
     * QuotaExceededException
     */
    quotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * TemplatesNotAvailableInRegionException
     */
    templatesNotAvailableInRegionException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
