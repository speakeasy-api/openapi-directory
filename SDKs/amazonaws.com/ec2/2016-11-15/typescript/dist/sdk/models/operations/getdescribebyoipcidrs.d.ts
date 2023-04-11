import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeByoipCidrsActionEnum {
    DescribeByoipCidrs = "DescribeByoipCidrs"
}
export declare enum GETDescribeByoipCidrsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDescribeByoipCidrsRequest extends SpeakeasyBase {
    action: GETDescribeByoipCidrsActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
     */
    maxResults: number;
    /**
     * The token for the next page of results.
     */
    nextToken?: string;
    version: GETDescribeByoipCidrsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeByoipCidrsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
