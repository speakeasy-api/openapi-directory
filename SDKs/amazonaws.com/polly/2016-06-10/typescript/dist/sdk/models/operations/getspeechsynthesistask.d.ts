import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpeechSynthesisTaskRequest extends SpeakeasyBase {
    /**
     * The Amazon Polly generated identifier for a speech synthesis task.
     */
    taskId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSpeechSynthesisTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSpeechSynthesisTaskOutput?: shared.GetSpeechSynthesisTaskOutput;
    /**
     * InvalidTaskIdException
     */
    invalidTaskIdException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceFailureException
     */
    serviceFailureException?: any;
    /**
     * SynthesisTaskNotFoundException
     */
    synthesisTaskNotFoundException?: any;
}
