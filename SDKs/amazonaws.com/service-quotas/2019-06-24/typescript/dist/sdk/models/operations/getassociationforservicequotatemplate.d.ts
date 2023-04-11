import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAssociationForServiceQuotaTemplateXAmzTargetEnum {
    ServiceQuotasV20190624GetAssociationForServiceQuotaTemplate = "ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate"
}
export declare class GetAssociationForServiceQuotaTemplateRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAssociationForServiceQuotaTemplateXAmzTargetEnum;
}
export declare class GetAssociationForServiceQuotaTemplateResponse extends SpeakeasyBase {
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
    getAssociationForServiceQuotaTemplateResponse?: shared.GetAssociationForServiceQuotaTemplateResponse;
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
     * ServiceQuotaTemplateNotInUseException
     */
    serviceQuotaTemplateNotInUseException?: any;
    /**
     * TemplatesNotAvailableInRegionException
     */
    templatesNotAvailableInRegionException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
