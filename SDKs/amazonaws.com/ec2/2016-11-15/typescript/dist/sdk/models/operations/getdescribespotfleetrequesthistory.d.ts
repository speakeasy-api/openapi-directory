import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeSpotFleetRequestHistoryActionEnum {
    DescribeSpotFleetRequestHistory = "DescribeSpotFleetRequestHistory"
}
/**
 * The type of events to describe. By default, all events are described.
 */
export declare enum GETDescribeSpotFleetRequestHistoryEventTypeEnum {
    InstanceChange = "instanceChange",
    FleetRequestChange = "fleetRequestChange",
    Error = "error",
    Information = "information"
}
export declare enum GETDescribeSpotFleetRequestHistoryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDescribeSpotFleetRequestHistoryRequest extends SpeakeasyBase {
    action: GETDescribeSpotFleetRequestHistoryActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The type of events to describe. By default, all events are described.
     */
    eventType?: GETDescribeSpotFleetRequestHistoryEventTypeEnum;
    /**
     * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.
     */
    maxResults?: number;
    /**
     * The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.
     */
    nextToken?: string;
    /**
     * The ID of the Spot Fleet request.
     */
    spotFleetRequestId: string;
    /**
     * The starting date and time for the events, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
     */
    startTime: Date;
    version: GETDescribeSpotFleetRequestHistoryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeSpotFleetRequestHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
