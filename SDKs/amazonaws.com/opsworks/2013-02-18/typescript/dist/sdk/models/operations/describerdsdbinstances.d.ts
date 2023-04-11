import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRdsDbInstancesXAmzTargetEnum {
    OpsWorks20130218DescribeRdsDbInstances = "OpsWorks_20130218.DescribeRdsDbInstances"
}
export declare class DescribeRdsDbInstancesRequest extends SpeakeasyBase {
    describeRdsDbInstancesRequest: shared.DescribeRdsDbInstancesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRdsDbInstancesXAmzTargetEnum;
}
export declare class DescribeRdsDbInstancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRdsDbInstancesResult?: shared.DescribeRdsDbInstancesResult;
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
