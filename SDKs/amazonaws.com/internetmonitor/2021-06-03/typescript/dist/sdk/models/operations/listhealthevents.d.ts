import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status of a health event.
 */
export declare enum ListHealthEventsEventStatusEnum {
    Active = "ACTIVE",
    Resolved = "RESOLVED"
}
export declare class ListHealthEventsRequest extends SpeakeasyBase {
    /**
     * The time when a health event ended. If the health event is still ongoing, then the end time is not set.
     */
    endTime?: Date;
    /**
     * The status of a health event.
     */
    eventStatus?: ListHealthEventsEventStatusEnum;
    /**
     * The number of health event objects that you want to return with this call.
     */
    maxResults?: number;
    /**
     * The name of the monitor.
     */
    monitorName: string;
    /**
     * The token for the next set of results. You receive this token from a previous call.
     */
    nextToken?: string;
    /**
     * The time when a health event started.
     */
    startTime?: Date;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListHealthEventsResponse extends SpeakeasyBase {
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
    listHealthEventsOutput?: shared.ListHealthEventsOutput;
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
