import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeTargetGroupsActionEnum {
    DescribeTargetGroups = "DescribeTargetGroups"
}
export declare enum GETDescribeTargetGroupsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETDescribeTargetGroupsRequest extends SpeakeasyBase {
    action: GETDescribeTargetGroupsActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    loadBalancerArn?: string;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    marker?: string;
    /**
     * The names of the target groups.
     */
    names?: string[];
    /**
     * The maximum number of results to return with this call.
     */
    pageSize?: number;
    /**
     * The Amazon Resource Names (ARN) of the target groups.
     */
    targetGroupArns?: string[];
    version: GETDescribeTargetGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeTargetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
