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
     * The date and time after which the job runs were submitted.
     */
    createdAfter?: Date;
    /**
     * The date and time before which the job runs were submitted.
     */
    createdBefore?: Date;
    /**
     * The maximum number of job runs that can be listed.
     */
    maxResults?: number;
    /**
     * The name of the job run.
     */
    name?: string;
    /**
     * The token for the next set of job runs to return.
     */
    nextToken?: string;
    /**
     * The states of the job run.
     */
    states?: shared.JobRunStateEnum[];
    /**
     * The ID of the virtual cluster for which to list the job run.
     */
    virtualClusterId: string;
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
