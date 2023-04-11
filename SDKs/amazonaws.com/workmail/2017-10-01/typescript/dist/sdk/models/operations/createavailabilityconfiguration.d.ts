import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAvailabilityConfigurationXAmzTargetEnum {
    WorkMailServiceCreateAvailabilityConfiguration = "WorkMailService.CreateAvailabilityConfiguration"
}
export declare class CreateAvailabilityConfigurationRequest extends SpeakeasyBase {
    createAvailabilityConfigurationRequest: shared.CreateAvailabilityConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAvailabilityConfigurationXAmzTargetEnum;
}
export declare class CreateAvailabilityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAvailabilityConfigurationResponse?: Record<string, any>;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NameAvailabilityException
     */
    nameAvailabilityException?: any;
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
