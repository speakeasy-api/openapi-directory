import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeWarmPoolActionEnum {
    DescribeWarmPool = "DescribeWarmPool"
}
export declare enum GETDescribeWarmPoolVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETDescribeWarmPoolRequest extends SpeakeasyBase {
    action: GETDescribeWarmPoolActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName: string;
    /**
     * The maximum number of instances to return with this call. The maximum value is <code>50</code>.
     */
    maxRecords?: number;
    /**
     * The token for the next set of instances to return. (You received this token from a previous call.)
     */
    nextToken?: string;
    version: GETDescribeWarmPoolVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeWarmPoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
