import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartMLLabelingSetGenerationTaskRunXAmzTargetEnum {
    AWSGlueStartMLLabelingSetGenerationTaskRun = "AWSGlue.StartMLLabelingSetGenerationTaskRun"
}
export declare class StartMLLabelingSetGenerationTaskRunRequest extends SpeakeasyBase {
    startMLLabelingSetGenerationTaskRunRequest: shared.StartMLLabelingSetGenerationTaskRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMLLabelingSetGenerationTaskRunXAmzTargetEnum;
}
export declare class StartMLLabelingSetGenerationTaskRunResponse extends SpeakeasyBase {
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
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * Success
     */
    startMLLabelingSetGenerationTaskRunResponse?: shared.StartMLLabelingSetGenerationTaskRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
