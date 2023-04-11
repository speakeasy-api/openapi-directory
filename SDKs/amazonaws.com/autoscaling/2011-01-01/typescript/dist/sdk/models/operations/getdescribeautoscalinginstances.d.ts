import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeAutoScalingInstancesActionEnum {
    DescribeAutoScalingInstances = "DescribeAutoScalingInstances"
}
export declare enum GETDescribeAutoScalingInstancesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETDescribeAutoScalingInstancesRequest extends SpeakeasyBase {
    action: GETDescribeAutoScalingInstancesActionEnum;
    /**
     * <p>The IDs of the instances. If you omit this property, all Auto Scaling instances are described. If you specify an ID that does not exist, it is ignored with no error.</p> <p>Array Members: Maximum number of 50 items.</p>
     */
    instanceIds?: string[];
    /**
     * The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>50</code>.
     */
    maxRecords?: number;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: string;
    version: GETDescribeAutoScalingInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeAutoScalingInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
