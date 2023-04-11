import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeTrafficSourcesActionEnum {
    DescribeTrafficSources = "DescribeTrafficSources"
}
export declare enum GETDescribeTrafficSourcesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETDescribeTrafficSourcesRequest extends SpeakeasyBase {
    action: GETDescribeTrafficSourcesActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName: string;
    /**
     * The maximum number of items to return with this call. The maximum value is <code>50</code>.
     */
    maxRecords?: number;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: string;
    /**
     * The type of traffic source you are describing. Currently, the only valid value is <code>vpc-lattice</code>.
     */
    trafficSourceType: string;
    version: GETDescribeTrafficSourcesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeTrafficSourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
