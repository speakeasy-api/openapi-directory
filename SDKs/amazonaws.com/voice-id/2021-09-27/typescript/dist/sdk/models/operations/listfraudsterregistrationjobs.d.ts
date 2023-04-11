import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListFraudsterRegistrationJobsXAmzTargetEnum {
    VoiceIDListFraudsterRegistrationJobs = "VoiceID.ListFraudsterRegistrationJobs"
}
export declare class ListFraudsterRegistrationJobsRequest extends SpeakeasyBase {
    listFraudsterRegistrationJobsRequest: shared.ListFraudsterRegistrationJobsRequest;
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
    xAmzTarget: ListFraudsterRegistrationJobsXAmzTargetEnum;
}
export declare class ListFraudsterRegistrationJobsResponse extends SpeakeasyBase {
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
    listFraudsterRegistrationJobsResponse?: shared.ListFraudsterRegistrationJobsResponse;
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
