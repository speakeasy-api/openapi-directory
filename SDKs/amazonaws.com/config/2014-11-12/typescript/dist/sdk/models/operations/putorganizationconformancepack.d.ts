import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutOrganizationConformancePackXAmzTargetEnum {
    StarlingDoveServicePutOrganizationConformancePack = "StarlingDoveService.PutOrganizationConformancePack"
}
export declare class PutOrganizationConformancePackRequest extends SpeakeasyBase {
    putOrganizationConformancePackRequest: shared.PutOrganizationConformancePackRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutOrganizationConformancePackXAmzTargetEnum;
}
export declare class PutOrganizationConformancePackResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InsufficientPermissionsException
     */
    insufficientPermissionsException?: any;
    /**
     * MaxNumberOfOrganizationConformancePacksExceededException
     */
    maxNumberOfOrganizationConformancePacksExceededException?: any;
    /**
     * NoAvailableOrganizationException
     */
    noAvailableOrganizationException?: any;
    /**
     * OrganizationAccessDeniedException
     */
    organizationAccessDeniedException?: any;
    /**
     * OrganizationAllFeaturesNotEnabledException
     */
    organizationAllFeaturesNotEnabledException?: any;
    /**
     * OrganizationConformancePackTemplateValidationException
     */
    organizationConformancePackTemplateValidationException?: any;
    /**
     * Success
     */
    putOrganizationConformancePackResponse?: shared.PutOrganizationConformancePackResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
