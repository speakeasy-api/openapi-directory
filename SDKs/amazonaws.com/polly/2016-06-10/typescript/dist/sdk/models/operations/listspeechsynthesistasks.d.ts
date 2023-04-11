import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the speech synthesis tasks returned in a List operation
 */
export declare enum ListSpeechSynthesisTasksStatusEnum {
    Scheduled = "scheduled",
    InProgress = "inProgress",
    Completed = "completed",
    Failed = "failed"
}
export declare class ListSpeechSynthesisTasksRequest extends SpeakeasyBase {
    /**
     * Maximum number of speech synthesis tasks returned in a List operation.
     */
    maxResults?: number;
    /**
     * The pagination token to use in the next request to continue the listing of speech synthesis tasks.
     */
    nextToken?: string;
    /**
     * Status of the speech synthesis tasks returned in a List operation
     */
    status?: ListSpeechSynthesisTasksStatusEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSpeechSynthesisTasksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listSpeechSynthesisTasksOutput?: shared.ListSpeechSynthesisTasksOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceFailureException
     */
    serviceFailureException?: any;
}
