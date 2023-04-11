import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about the batch policy.
 */
export declare class StartSimulationJobBatchRequestBodyBatchPolicy extends SpeakeasyBase {
    maxConcurrency?: number;
    timeoutInSeconds?: number;
}
export declare class StartSimulationJobBatchRequestBody extends SpeakeasyBase {
    /**
     * Information about the batch policy.
     */
    batchPolicy?: StartSimulationJobBatchRequestBodyBatchPolicy;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: string;
    /**
     * A list of simulation job requests to create in the batch.
     */
    createSimulationJobRequests: shared.SimulationJobRequest[];
    /**
     * A map that contains tag keys and tag values that are attached to the deployment job batch.
     */
    tags?: Record<string, string>;
}
export declare class StartSimulationJobBatchRequest extends SpeakeasyBase {
    requestBody: StartSimulationJobBatchRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartSimulationJobBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    startSimulationJobBatchResponse?: shared.StartSimulationJobBatchResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
