import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeElasticLoadBalancersXAmzTargetEnum {
    OpsWorks20130218DescribeElasticLoadBalancers = "OpsWorks_20130218.DescribeElasticLoadBalancers"
}
export declare class DescribeElasticLoadBalancersRequest extends SpeakeasyBase {
    describeElasticLoadBalancersRequest: shared.DescribeElasticLoadBalancersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeElasticLoadBalancersXAmzTargetEnum;
}
export declare class DescribeElasticLoadBalancersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeElasticLoadBalancersResult?: shared.DescribeElasticLoadBalancersResult;
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
