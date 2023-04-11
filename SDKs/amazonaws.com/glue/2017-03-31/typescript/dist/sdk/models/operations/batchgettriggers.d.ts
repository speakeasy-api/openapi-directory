import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetTriggersXAmzTargetEnum {
    AWSGlueBatchGetTriggers = "AWSGlue.BatchGetTriggers"
}
export declare class BatchGetTriggersRequest extends SpeakeasyBase {
    batchGetTriggersRequest: shared.BatchGetTriggersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetTriggersXAmzTargetEnum;
}
export declare class BatchGetTriggersResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetTriggersResponse?: shared.BatchGetTriggersResponse;
    contentType: string;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
