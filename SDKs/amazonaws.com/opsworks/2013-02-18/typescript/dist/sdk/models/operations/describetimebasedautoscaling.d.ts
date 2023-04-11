import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTimeBasedAutoScalingXAmzTargetEnum {
    OpsWorks20130218DescribeTimeBasedAutoScaling = "OpsWorks_20130218.DescribeTimeBasedAutoScaling"
}
export declare class DescribeTimeBasedAutoScalingRequest extends SpeakeasyBase {
    describeTimeBasedAutoScalingRequest: shared.DescribeTimeBasedAutoScalingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTimeBasedAutoScalingXAmzTargetEnum;
}
export declare class DescribeTimeBasedAutoScalingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTimeBasedAutoScalingResult?: shared.DescribeTimeBasedAutoScalingResult;
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
