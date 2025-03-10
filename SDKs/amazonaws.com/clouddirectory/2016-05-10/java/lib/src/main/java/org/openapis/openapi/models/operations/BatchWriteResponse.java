/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class BatchWriteResponse {
    /**
     * AccessDeniedException
     */
    
    public org.openapis.openapi.models.shared.AccessDeniedException accessDeniedException;

    public BatchWriteResponse withAccessDeniedException(org.openapis.openapi.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    /**
     * BatchWriteException
     */
    
    public org.openapis.openapi.models.shared.BatchWriteException batchWriteException;

    public BatchWriteResponse withBatchWriteException(org.openapis.openapi.models.shared.BatchWriteException batchWriteException) {
        this.batchWriteException = batchWriteException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.BatchWriteResponse batchWriteResponse;

    public BatchWriteResponse withBatchWriteResponse(org.openapis.openapi.models.shared.BatchWriteResponse batchWriteResponse) {
        this.batchWriteResponse = batchWriteResponse;
        return this;
    }
    
    
    public String contentType;

    public BatchWriteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * DirectoryNotEnabledException
     */
    
    public org.openapis.openapi.models.shared.DirectoryNotEnabledException directoryNotEnabledException;

    public BatchWriteResponse withDirectoryNotEnabledException(org.openapis.openapi.models.shared.DirectoryNotEnabledException directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    
    /**
     * InternalServiceException
     */
    
    public org.openapis.openapi.models.shared.InternalServiceException internalServiceException;

    public BatchWriteResponse withInternalServiceException(org.openapis.openapi.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    
    /**
     * InvalidArnException
     */
    
    public org.openapis.openapi.models.shared.InvalidArnException invalidArnException;

    public BatchWriteResponse withInvalidArnException(org.openapis.openapi.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    
    /**
     * LimitExceededException
     */
    
    public org.openapis.openapi.models.shared.LimitExceededException limitExceededException;

    public BatchWriteResponse withLimitExceededException(org.openapis.openapi.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    
    
    public Integer statusCode;

    public BatchWriteResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public BatchWriteResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * RetryableConflictException
     */
    
    public org.openapis.openapi.models.shared.RetryableConflictException retryableConflictException;

    public BatchWriteResponse withRetryableConflictException(org.openapis.openapi.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public org.openapis.openapi.models.shared.ValidationException validationException;

    public BatchWriteResponse withValidationException(org.openapis.openapi.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public BatchWriteResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
