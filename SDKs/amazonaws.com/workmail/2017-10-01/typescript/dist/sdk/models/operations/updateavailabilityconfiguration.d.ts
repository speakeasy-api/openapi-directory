import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAvailabilityConfigurationXAmzTargetEnum {
    WorkMailServiceUpdateAvailabilityConfiguration = "WorkMailService.UpdateAvailabilityConfiguration"
}
export declare class UpdateAvailabilityConfigurationRequest extends SpeakeasyBase {
    updateAvailabilityConfigurationRequest: shared.UpdateAvailabilityConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAvailabilityConfigurationXAmzTargetEnum;
}
export declare class UpdateAvailabilityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateAvailabilityConfigurationResponse?: Record<string, any>;
}
