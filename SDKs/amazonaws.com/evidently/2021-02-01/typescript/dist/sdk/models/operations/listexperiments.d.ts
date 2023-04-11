import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Use this optional parameter to limit the returned results to only the experiments with the status that you specify here.
 */
export declare enum ListExperimentsStatusEnum {
    Created = "CREATED",
    Updating = "UPDATING",
    Running = "RUNNING",
    Completed = "COMPLETED",
    Cancelled = "CANCELLED"
}
export declare class ListExperimentsRequest extends SpeakeasyBase {
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
     * The token to use when requesting the next set of results. You received this token from a previous <code>ListExperiments</code> operation.
     */
    nextToken?: string;
    /**
     * The name or ARN of the project to return the experiment list from.
     */
    project: string;
    /**
     * Use this optional parameter to limit the returned results to only the experiments with the status that you specify here.
     */
    status?: ListExperimentsStatusEnum;
}
export declare class ListExperimentsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    listExperimentsResponse?: shared.ListExperimentsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
