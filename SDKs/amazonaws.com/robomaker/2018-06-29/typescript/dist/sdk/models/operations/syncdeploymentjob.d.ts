import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SyncDeploymentJobRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken: string;
    /**
     * The target fleet for the synchronization.
     */
    fleet: string;
}
export declare class SyncDeploymentJobRequest extends SpeakeasyBase {
    requestBody: SyncDeploymentJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SyncDeploymentJobResponse extends SpeakeasyBase {
    /**
     * ConcurrentDeploymentException
     */
    concurrentDeploymentException?: any;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    syncDeploymentJobResponse?: shared.SyncDeploymentJobResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
