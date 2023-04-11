import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListJobRunsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the application for which to list the job run.
     */
    applicationId: string;
    /**
     * The lower bound of the option to filter by creation date and time.
     */
    createdAtAfter?: Date;
    /**
     * The upper bound of the option to filter by creation date and time.
     */
    createdAtBefore?: Date;
    /**
     * The maximum number of job runs that can be listed.
     */
    maxResults?: number;
    /**
     * The token for the next set of job run results.
     */
    nextToken?: string;
    /**
     * An optional filter for job run states. Note that if this filter contains multiple states, the resulting list will be grouped by the state.
     */
    states?: shared.JobRunStateEnum[];
}
export declare class ListJobRunsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listJobRunsResponse?: shared.ListJobRunsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
