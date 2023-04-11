import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLoadBasedAutoScalingXAmzTargetEnum {
    OpsWorks20130218DescribeLoadBasedAutoScaling = "OpsWorks_20130218.DescribeLoadBasedAutoScaling"
}
export declare class DescribeLoadBasedAutoScalingRequest extends SpeakeasyBase {
    describeLoadBasedAutoScalingRequest: shared.DescribeLoadBasedAutoScalingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLoadBasedAutoScalingXAmzTargetEnum;
}
export declare class DescribeLoadBasedAutoScalingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLoadBasedAutoScalingResult?: shared.DescribeLoadBasedAutoScalingResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
