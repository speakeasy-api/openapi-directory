import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeListenersActionEnum {
    DescribeListeners = "DescribeListeners"
}
export declare enum GETDescribeListenersVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETDescribeListenersRequest extends SpeakeasyBase {
    action: GETDescribeListenersActionEnum;
    /**
     * The Amazon Resource Names (ARN) of the listeners.
     */
    listenerArns?: string[];
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    loadBalancerArn?: string;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    marker?: string;
    /**
     * The maximum number of results to return with this call.
     */
    pageSize?: number;
    version: GETDescribeListenersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeListenersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
