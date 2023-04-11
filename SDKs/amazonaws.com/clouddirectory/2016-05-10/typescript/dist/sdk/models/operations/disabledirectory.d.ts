import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisableDirectoryRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ARN of the directory to disable.
     */
    xAmzDataPartition: string;
}
export declare class DisableDirectoryResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    /**
     * DirectoryDeletedException
     */
    directoryDeletedException?: shared.DirectoryDeletedException;
    /**
     * Success
     */
    disableDirectoryResponse?: shared.DisableDirectoryResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: shared.InternalServiceException;
    /**
     * InvalidArnException
     */
    invalidArnException?: shared.InvalidArnException;
    /**
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: shared.ResourceNotFoundException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: shared.RetryableConflictException;
    /**
     * ValidationException
     */
    validationException?: shared.ValidationException;
}
