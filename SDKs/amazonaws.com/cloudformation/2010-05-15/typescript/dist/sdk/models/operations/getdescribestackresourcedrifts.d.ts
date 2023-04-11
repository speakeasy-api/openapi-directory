import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETDescribeStackResourceDriftsActionEnum {
    DescribeStackResourceDrifts = "DescribeStackResourceDrifts"
}
export declare enum GETDescribeStackResourceDriftsVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETDescribeStackResourceDriftsRequest extends SpeakeasyBase {
    action: GETDescribeStackResourceDriftsActionEnum;
    /**
     * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
     */
    maxResults?: number;
    /**
     * A string that identifies the next page of stack resource drift results.
     */
    nextToken?: string;
    /**
     * The name of the stack for which you want drift information.
     */
    stackName: string;
    /**
     * <p>The resource drift status values to use as filters for the resource drift results returned.</p> <ul> <li> <p> <code>DELETED</code>: The resource differs from its expected template configuration in that the resource has been deleted.</p> </li> <li> <p> <code>MODIFIED</code>: One or more resource properties differ from their expected template values.</p> </li> <li> <p> <code>IN_SYNC</code>: The resource's actual configuration matches its expected template configuration.</p> </li> <li> <p> <code>NOT_CHECKED</code>: CloudFormation doesn't currently return this value.</p> </li> </ul>
     */
    stackResourceDriftStatusFilters?: shared.StackResourceDriftStatusEnum[];
    version: GETDescribeStackResourceDriftsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeStackResourceDriftsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
