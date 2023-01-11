import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DisassociateServiceQuotaTemplateXAmzTargetEnum {
    ServiceQuotasV20190624DisassociateServiceQuotaTemplate = "ServiceQuotasV20190624.DisassociateServiceQuotaTemplate"
}
export declare class DisassociateServiceQuotaTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateServiceQuotaTemplateXAmzTargetEnum;
}
export declare class DisassociateServiceQuotaTemplateRequest extends SpeakeasyBase {
    headers: DisassociateServiceQuotaTemplateHeaders;
    request: Record<string, any>;
}
export declare class DisassociateServiceQuotaTemplateResponse extends SpeakeasyBase {
    awsServiceAccessNotEnabledException?: any;
    accessDeniedException?: any;
    contentType: string;
    dependencyAccessDeniedException?: any;
    disassociateServiceQuotaTemplateResponse?: Record<string, any>;
    noAvailableOrganizationException?: any;
    serviceException?: any;
    serviceQuotaTemplateNotInUseException?: any;
    statusCode: number;
    templatesNotAvailableInRegionException?: any;
    tooManyRequestsException?: any;
}
