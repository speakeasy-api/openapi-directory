import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartMLEvaluationTaskRunXAmzTargetEnum {
    AWSGlueStartMLEvaluationTaskRun = "AWSGlue.StartMLEvaluationTaskRun"
}
export declare class StartMLEvaluationTaskRunRequest extends SpeakeasyBase {
    startMLEvaluationTaskRunRequest: shared.StartMLEvaluationTaskRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMLEvaluationTaskRunXAmzTargetEnum;
}
export declare class StartMLEvaluationTaskRunResponse extends SpeakeasyBase {
    /**
     * ConcurrentRunsExceededException
     */
    concurrentRunsExceededException?: any;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * MLTransformNotReadyException
     */
    mlTransformNotReadyException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * Success
     */
    startMLEvaluationTaskRunResponse?: shared.StartMLEvaluationTaskRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
