import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLoggingConfigurationXAmzTargetEnum {
    NetworkFirewall20201112DescribeLoggingConfiguration = "NetworkFirewall_20201112.DescribeLoggingConfiguration"
}
export declare class DescribeLoggingConfigurationRequest extends SpeakeasyBase {
    describeLoggingConfigurationRequest: shared.DescribeLoggingConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLoggingConfigurationXAmzTargetEnum;
}
export declare class DescribeLoggingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLoggingConfigurationResponse?: shared.DescribeLoggingConfigurationResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
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
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
