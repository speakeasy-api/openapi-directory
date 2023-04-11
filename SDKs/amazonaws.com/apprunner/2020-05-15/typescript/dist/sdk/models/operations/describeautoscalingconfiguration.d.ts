import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAutoScalingConfigurationXAmzTargetEnum {
    AppRunnerDescribeAutoScalingConfiguration = "AppRunner.DescribeAutoScalingConfiguration"
}
export declare class DescribeAutoScalingConfigurationRequest extends SpeakeasyBase {
    describeAutoScalingConfigurationRequest: shared.DescribeAutoScalingConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAutoScalingConfigurationXAmzTargetEnum;
}
export declare class DescribeAutoScalingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAutoScalingConfigurationResponse?: shared.DescribeAutoScalingConfigurationResponse;
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
