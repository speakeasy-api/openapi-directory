import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeResizeActionEnum {
    DescribeResize = "DescribeResize"
}
export declare enum GETDescribeResizeVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDescribeResizeRequest extends SpeakeasyBase {
    action: GETDescribeResizeActionEnum;
    /**
     * <p>The unique identifier of a cluster whose resize progress you are requesting. This parameter is case-sensitive.</p> <p>By default, resize operations for all clusters defined for an Amazon Web Services account are returned.</p>
     */
    clusterIdentifier: string;
    version: GETDescribeResizeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeResizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
