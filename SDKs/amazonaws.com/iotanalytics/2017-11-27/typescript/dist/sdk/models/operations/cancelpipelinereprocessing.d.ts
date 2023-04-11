import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CancelPipelineReprocessingRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of pipeline for which data reprocessing is canceled.
     */
    pipelineName: string;
    /**
     * The ID of the reprocessing task (returned by <code>StartPipelineReprocessing</code>).
     */
    reprocessingId: string;
}
export declare class CancelPipelineReprocessingResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelPipelineReprocessingResponse?: Record<string, any>;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
