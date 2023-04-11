import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum {
    ServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplate = "ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate"
}
export declare class GetServiceQuotaIncreaseRequestFromTemplateRequest extends SpeakeasyBase {
    getServiceQuotaIncreaseRequestFromTemplateRequest: shared.GetServiceQuotaIncreaseRequestFromTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum;
}
export declare class GetServiceQuotaIncreaseRequestFromTemplateResponse extends SpeakeasyBase {
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
     * Success
     */
    getServiceQuotaIncreaseRequestFromTemplateResponse?: shared.GetServiceQuotaIncreaseRequestFromTemplateResponse;
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
