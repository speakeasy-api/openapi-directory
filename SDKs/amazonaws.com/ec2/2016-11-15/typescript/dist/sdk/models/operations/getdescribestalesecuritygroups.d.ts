import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeStaleSecurityGroupsActionEnum {
    DescribeStaleSecurityGroups = "DescribeStaleSecurityGroups"
}
export declare enum GETDescribeStaleSecurityGroupsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDescribeStaleSecurityGroupsRequest extends SpeakeasyBase {
    action: GETDescribeStaleSecurityGroupsActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.
     */
    maxResults?: number;
    /**
     * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
     */
    nextToken?: string;
    version: GETDescribeStaleSecurityGroupsVersionEnum;
    /**
     * The ID of the VPC.
     */
    vpcId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeStaleSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
