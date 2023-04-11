import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum {
    ServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplate = "ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate"
}
export declare class ListServiceQuotaIncreaseRequestsInTemplateRequest extends SpeakeasyBase {
    listServiceQuotaIncreaseRequestsInTemplateRequest: shared.ListServiceQuotaIncreaseRequestsInTemplateRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum;
}
export declare class ListServiceQuotaIncreaseRequestsInTemplateResponse extends SpeakeasyBase {
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
     * Success
     */
    listServiceQuotaIncreaseRequestsInTemplateResponse?: shared.ListServiceQuotaIncreaseRequestsInTemplateResponse;
    /**
     * NoAvailableOrganizationException
     */
    noAvailableOrganizationException?: any;
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
