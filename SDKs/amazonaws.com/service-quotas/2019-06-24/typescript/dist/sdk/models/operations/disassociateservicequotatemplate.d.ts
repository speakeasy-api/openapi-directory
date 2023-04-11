import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum DisassociateServiceQuotaTemplateXAmzTargetEnum {
    ServiceQuotasV20190624DisassociateServiceQuotaTemplate = "ServiceQuotasV20190624.DisassociateServiceQuotaTemplate"
}
export declare class DisassociateServiceQuotaTemplateRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateServiceQuotaTemplateXAmzTargetEnum;
}
export declare class DisassociateServiceQuotaTemplateResponse extends SpeakeasyBase {
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
    disassociateServiceQuotaTemplateResponse?: Record<string, any>;
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
