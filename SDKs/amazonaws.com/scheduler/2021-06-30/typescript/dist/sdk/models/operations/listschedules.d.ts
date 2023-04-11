import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * If specified, only lists the schedules whose current state matches the given filter.
 */
export declare enum ListSchedulesStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class ListSchedulesRequest extends SpeakeasyBase {
    /**
     * If specified, limits the number of results returned by this operation. The operation also returns a <code>NextToken</code> which you can use in a subsequent operation to retrieve the next set of results.
     */
    maxResults?: number;
    /**
     * Schedule name prefix to return the filtered list of resources.
     */
    namePrefix?: string;
    /**
     * The token returned by a previous call to retrieve the next set of results.
     */
    nextToken?: string;
    /**
     * If specified, only lists the schedules whose associated schedule group matches the given filter.
     */
    scheduleGroup?: string;
    /**
     * If specified, only lists the schedules whose current state matches the given filter.
     */
    state?: ListSchedulesStateEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listSchedulesOutput?: shared.ListSchedulesOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
