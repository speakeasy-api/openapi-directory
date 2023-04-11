import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Use this optional parameter to limit the returned results to only the launches with the status that you specify here.
 */
export declare enum ListLaunchesStatusEnum {
    Created = "CREATED",
    Updating = "UPDATING",
    Running = "RUNNING",
    Completed = "COMPLETED",
    Cancelled = "CANCELLED"
}
export declare class ListLaunchesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to include in the response.
     */
    maxResults?: number;
    /**
     * The token to use when requesting the next set of results. You received this token from a previous <code>ListLaunches</code> operation.
     */
    nextToken?: string;
    /**
     * The name or ARN of the project to return the launch list from.
     */
    project: string;
    /**
     * Use this optional parameter to limit the returned results to only the launches with the status that you specify here.
     */
    status?: ListLaunchesStatusEnum;
}
export declare class ListLaunchesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    listLaunchesResponse?: shared.ListLaunchesResponse;
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
