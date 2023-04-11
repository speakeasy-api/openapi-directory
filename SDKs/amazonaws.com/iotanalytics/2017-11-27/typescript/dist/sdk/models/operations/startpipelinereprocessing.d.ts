import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies one or more sets of channel messages.
 */
export declare class StartPipelineReprocessingRequestBodyChannelMessages extends SpeakeasyBase {
    s3Paths?: string[];
}
export declare class StartPipelineReprocessingRequestBody extends SpeakeasyBase {
    /**
     * Specifies one or more sets of channel messages.
     */
    channelMessages?: StartPipelineReprocessingRequestBodyChannelMessages;
    /**
     * <p>The end time (exclusive) of raw message data that is reprocessed.</p> <p>If you specify a value for the <code>endTime</code> parameter, you must not use the <code>channelMessages</code> object.</p>
     */
    endTime?: Date;
    /**
     * <p>The start time (inclusive) of raw message data that is reprocessed.</p> <p>If you specify a value for the <code>startTime</code> parameter, you must not use the <code>channelMessages</code> object.</p>
     */
    startTime?: Date;
}
export declare class StartPipelineReprocessingRequest extends SpeakeasyBase {
    requestBody: StartPipelineReprocessingRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the pipeline on which to start reprocessing.
     */
    pipelineName: string;
}
export declare class StartPipelineReprocessingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * Success
     */
    startPipelineReprocessingResponse?: shared.StartPipelineReprocessingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
