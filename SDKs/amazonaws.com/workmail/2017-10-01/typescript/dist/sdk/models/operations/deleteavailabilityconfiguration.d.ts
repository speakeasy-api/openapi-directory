import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAvailabilityConfigurationXAmzTargetEnum {
    WorkMailServiceDeleteAvailabilityConfiguration = "WorkMailService.DeleteAvailabilityConfiguration"
}
export declare class DeleteAvailabilityConfigurationRequest extends SpeakeasyBase {
    deleteAvailabilityConfigurationRequest: shared.DeleteAvailabilityConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAvailabilityConfigurationXAmzTargetEnum;
}
export declare class DeleteAvailabilityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteAvailabilityConfigurationResponse?: Record<string, any>;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
