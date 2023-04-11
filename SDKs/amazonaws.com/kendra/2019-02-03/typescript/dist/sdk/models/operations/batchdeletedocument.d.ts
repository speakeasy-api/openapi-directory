import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDeleteDocumentXAmzTargetEnum {
    AWSKendraFrontendServiceBatchDeleteDocument = "AWSKendraFrontendService.BatchDeleteDocument"
}
export declare class BatchDeleteDocumentRequest extends SpeakeasyBase {
    batchDeleteDocumentRequest: shared.BatchDeleteDocumentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDeleteDocumentXAmzTargetEnum;
}
export declare class BatchDeleteDocumentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchDeleteDocumentResponse?: shared.BatchDeleteDocumentResponse;
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
