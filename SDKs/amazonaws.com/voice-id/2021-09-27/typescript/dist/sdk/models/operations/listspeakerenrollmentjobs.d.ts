import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSpeakerEnrollmentJobsXAmzTargetEnum {
    VoiceIDListSpeakerEnrollmentJobs = "VoiceID.ListSpeakerEnrollmentJobs"
}
export declare class ListSpeakerEnrollmentJobsRequest extends SpeakeasyBase {
    listSpeakerEnrollmentJobsRequest: shared.ListSpeakerEnrollmentJobsRequest;
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
    xAmzTarget: ListSpeakerEnrollmentJobsXAmzTargetEnum;
}
export declare class ListSpeakerEnrollmentJobsResponse extends SpeakeasyBase {
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
    listSpeakerEnrollmentJobsResponse?: shared.ListSpeakerEnrollmentJobsResponse;
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
