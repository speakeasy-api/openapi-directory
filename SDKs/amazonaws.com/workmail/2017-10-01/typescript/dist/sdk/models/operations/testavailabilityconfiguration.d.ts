import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TestAvailabilityConfigurationXAmzTargetEnum {
    WorkMailServiceTestAvailabilityConfiguration = "WorkMailService.TestAvailabilityConfiguration"
}
export declare class TestAvailabilityConfigurationRequest extends SpeakeasyBase {
    testAvailabilityConfigurationRequest: shared.TestAvailabilityConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TestAvailabilityConfigurationXAmzTargetEnum;
}
export declare class TestAvailabilityConfigurationResponse extends SpeakeasyBase {
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
    testAvailabilityConfigurationResponse?: shared.TestAvailabilityConfigurationResponse;
}
