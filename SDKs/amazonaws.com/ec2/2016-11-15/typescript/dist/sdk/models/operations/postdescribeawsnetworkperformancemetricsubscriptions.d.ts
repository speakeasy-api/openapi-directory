import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeAwsNetworkPerformanceMetricSubscriptionsActionEnum {
    DescribeAwsNetworkPerformanceMetricSubscriptions = "DescribeAwsNetworkPerformanceMetricSubscriptions"
}
export declare enum POSTDescribeAwsNetworkPerformanceMetricSubscriptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeAwsNetworkPerformanceMetricSubscriptionsRequest extends SpeakeasyBase {
    action: POSTDescribeAwsNetworkPerformanceMetricSubscriptionsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeAwsNetworkPerformanceMetricSubscriptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeAwsNetworkPerformanceMetricSubscriptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
