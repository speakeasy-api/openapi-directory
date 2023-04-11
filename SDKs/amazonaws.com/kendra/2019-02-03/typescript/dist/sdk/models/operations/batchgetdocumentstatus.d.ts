import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetDocumentStatusXAmzTargetEnum {
    AWSKendraFrontendServiceBatchGetDocumentStatus = "AWSKendraFrontendService.BatchGetDocumentStatus"
}
export declare class BatchGetDocumentStatusRequest extends SpeakeasyBase {
    batchGetDocumentStatusRequest: shared.BatchGetDocumentStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetDocumentStatusXAmzTargetEnum;
}
export declare class BatchGetDocumentStatusResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchGetDocumentStatusResponse?: shared.BatchGetDocumentStatusResponse;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
