import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMedicalTranscriptionJobsXAmzTargetEnum {
    TranscribeListMedicalTranscriptionJobs = "Transcribe.ListMedicalTranscriptionJobs"
}
export declare class ListMedicalTranscriptionJobsRequest extends SpeakeasyBase {
    listMedicalTranscriptionJobsRequest: shared.ListMedicalTranscriptionJobsRequest;
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
    xAmzTarget: ListMedicalTranscriptionJobsXAmzTargetEnum;
}
export declare class ListMedicalTranscriptionJobsResponse extends SpeakeasyBase {
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
    listMedicalTranscriptionJobsResponse?: shared.ListMedicalTranscriptionJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
