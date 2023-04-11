import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeFleetHistoryActionEnum {
    DescribeFleetHistory = "DescribeFleetHistory"
}
/**
 * The type of events to describe. By default, all events are described.
 */
export declare enum GETDescribeFleetHistoryEventTypeEnum {
    InstanceChange = "instance-change",
    FleetChange = "fleet-change",
    ServiceError = "service-error"
}
export declare enum GETDescribeFleetHistoryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDescribeFleetHistoryRequest extends SpeakeasyBase {
    action: GETDescribeFleetHistoryActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The type of events to describe. By default, all events are described.
     */
    eventType?: GETDescribeFleetHistoryEventTypeEnum;
    /**
     * The ID of the EC2 Fleet.
     */
    fleetId: string;
    /**
     * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.
     */
    maxResults?: number;
    /**
     * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
     */
    nextToken?: string;
    /**
     * The start date and time for the events, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
     */
    startTime: Date;
    version: GETDescribeFleetHistoryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeFleetHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
