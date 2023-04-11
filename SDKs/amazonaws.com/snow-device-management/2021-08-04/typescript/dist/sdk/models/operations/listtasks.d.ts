import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure used to filter the list of tasks.
 */
export declare enum ListTasksStateEnum {
    InProgress = "IN_PROGRESS",
    Canceled = "CANCELED",
    Completed = "COMPLETED"
}
export declare class ListTasksRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of tasks per page.
     */
    maxResults?: number;
    /**
     * A pagination token to continue to the next page of tasks.
     */
    nextToken?: string;
    /**
     * A structure used to filter the list of tasks.
     */
    state?: ListTasksStateEnum;
}
export declare class ListTasksResponse extends SpeakeasyBase {
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
    listTasksOutput?: shared.ListTasksOutput;
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
