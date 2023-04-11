import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeObservabilityConfigurationXAmzTargetEnum {
    AppRunnerDescribeObservabilityConfiguration = "AppRunner.DescribeObservabilityConfiguration"
}
export declare class DescribeObservabilityConfigurationRequest extends SpeakeasyBase {
    describeObservabilityConfigurationRequest: shared.DescribeObservabilityConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeObservabilityConfigurationXAmzTargetEnum;
}
export declare class DescribeObservabilityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeObservabilityConfigurationResponse?: shared.DescribeObservabilityConfigurationResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
