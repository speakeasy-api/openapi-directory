import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The state the pipe is in.
 */
export declare enum ListPipesCurrentStateEnum {
    Running = "RUNNING",
    Stopped = "STOPPED",
    Creating = "CREATING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Starting = "STARTING",
    Stopping = "STOPPING",
    CreateFailed = "CREATE_FAILED",
    UpdateFailed = "UPDATE_FAILED",
    StartFailed = "START_FAILED",
    StopFailed = "STOP_FAILED"
}
/**
 * The state the pipe should be in.
 */
export declare enum ListPipesDesiredStateEnum {
    Running = "RUNNING",
    Stopped = "STOPPED"
}
export declare class ListPipesRequest extends SpeakeasyBase {
    /**
     * The state the pipe is in.
     */
    currentState?: ListPipesCurrentStateEnum;
    /**
     * The state the pipe should be in.
     */
    desiredState?: ListPipesDesiredStateEnum;
    /**
     * The maximum number of pipes to include in the response.
     */
    limit?: number;
    /**
     * A value that will return a subset of the pipes associated with this account. For example, <code>"NamePrefix": "ABC"</code> will return all endpoints with "ABC" in the name.
     */
    namePrefix?: string;
    /**
     * If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
     */
    nextToken?: string;
    /**
     * The prefix matching the pipe source.
     */
    sourcePrefix?: string;
    /**
     * The prefix matching the pipe target.
     */
    targetPrefix?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPipesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * Success
     */
    listPipesResponse?: shared.ListPipesResponse;
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
