import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Sort timeline events by the specified key value pair.
 */
export declare enum ListTimelineEventsRequestBodySortByEnum {
    EventTime = "EVENT_TIME"
}
/**
 * Sorts the order of timeline events by the value specified in the <code>sortBy</code> field.
 */
export declare enum ListTimelineEventsRequestBodySortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class ListTimelineEventsRequestBody extends SpeakeasyBase {
    /**
     * <p>Filters the timeline events based on the provided conditional values. You can filter timeline events with the following keys:</p> <ul> <li> <p> <code>eventTime</code> </p> </li> <li> <p> <code>eventType</code> </p> </li> </ul> <p>Note the following when deciding how to use Filters:</p> <ul> <li> <p>If you don't specify a Filter, the response includes all timeline events.</p> </li> <li> <p>If you specify more than one filter in a single request, the response returns timeline events that match all filters.</p> </li> <li> <p>If you specify a filter with more than one value, the response returns timeline events that match any of the values provided.</p> </li> </ul>
     */
    filters?: shared.Filter[];
    /**
     * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
     */
    incidentRecordArn: string;
    /**
     * The maximum number of results per page.
     */
    maxResults?: number;
    /**
     * The pagination token to continue to the next page of results.
     */
    nextToken?: string;
    /**
     * Sort timeline events by the specified key value pair.
     */
    sortBy?: ListTimelineEventsRequestBodySortByEnum;
    /**
     * Sorts the order of timeline events by the value specified in the <code>sortBy</code> field.
     */
    sortOrder?: ListTimelineEventsRequestBodySortOrderEnum;
}
export declare class ListTimelineEventsRequest extends SpeakeasyBase {
    requestBody: ListTimelineEventsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListTimelineEventsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listTimelineEventsOutput?: shared.ListTimelineEventsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
