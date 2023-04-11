import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAccessControlConfigurationXAmzTargetEnum {
    AWSKendraFrontendServiceDescribeAccessControlConfiguration = "AWSKendraFrontendService.DescribeAccessControlConfiguration"
}
export declare class DescribeAccessControlConfigurationRequest extends SpeakeasyBase {
    describeAccessControlConfigurationRequest: shared.DescribeAccessControlConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAccessControlConfigurationXAmzTargetEnum;
}
export declare class DescribeAccessControlConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeAccessControlConfigurationResponse?: shared.DescribeAccessControlConfigurationResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
    /**
     * ValidationException
     */
    validationException?: any;
}
