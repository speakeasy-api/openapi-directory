import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTranscriptionJobsXAmzTargetEnum {
    TranscribeListTranscriptionJobs = "Transcribe.ListTranscriptionJobs"
}
export declare class ListTranscriptionJobsRequest extends SpeakeasyBase {
    listTranscriptionJobsRequest: shared.ListTranscriptionJobsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTranscriptionJobsXAmzTargetEnum;
}
export declare class ListTranscriptionJobsResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listTranscriptionJobsResponse?: shared.ListTranscriptionJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
