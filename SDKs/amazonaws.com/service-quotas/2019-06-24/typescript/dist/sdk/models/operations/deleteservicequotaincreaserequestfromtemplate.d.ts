import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum {
    ServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplate = "ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate"
}
export declare class DeleteServiceQuotaIncreaseRequestFromTemplateRequest extends SpeakeasyBase {
    deleteServiceQuotaIncreaseRequestFromTemplateRequest: shared.DeleteServiceQuotaIncreaseRequestFromTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum;
}
export declare class DeleteServiceQuotaIncreaseRequestFromTemplateResponse extends SpeakeasyBase {
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
     * Success
     */
    deleteServiceQuotaIncreaseRequestFromTemplateResponse?: Record<string, any>;
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
