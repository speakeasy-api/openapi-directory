import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInstancesXAmzTargetEnum {
    OpsWorks20130218DescribeInstances = "OpsWorks_20130218.DescribeInstances"
}
export declare class DescribeInstancesRequest extends SpeakeasyBase {
    describeInstancesRequest: shared.DescribeInstancesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInstancesXAmzTargetEnum;
}
export declare class DescribeInstancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeInstancesResult?: shared.DescribeInstancesResult;
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
