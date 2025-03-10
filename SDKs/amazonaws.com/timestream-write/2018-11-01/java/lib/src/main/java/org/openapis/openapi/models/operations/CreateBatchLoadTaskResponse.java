/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateBatchLoadTaskResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public CreateBatchLoadTaskResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    /**
     * ConflictException
     */
    
    public Object conflictException;

    public CreateBatchLoadTaskResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    
    
    public String contentType;

    public CreateBatchLoadTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.CreateBatchLoadTaskResponse createBatchLoadTaskResponse;

    public CreateBatchLoadTaskResponse withCreateBatchLoadTaskResponse(org.openapis.openapi.models.shared.CreateBatchLoadTaskResponse createBatchLoadTaskResponse) {
        this.createBatchLoadTaskResponse = createBatchLoadTaskResponse;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public CreateBatchLoadTaskResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    /**
     * InvalidEndpointException
     */
    
    public Object invalidEndpointException;

    public CreateBatchLoadTaskResponse withInvalidEndpointException(Object invalidEndpointException) {
        this.invalidEndpointException = invalidEndpointException;
        return this;
    }
    
    /**
     * ServiceQuotaExceededException
     */
    
    public Object serviceQuotaExceededException;

    public CreateBatchLoadTaskResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateBatchLoadTaskResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateBatchLoadTaskResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public CreateBatchLoadTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public CreateBatchLoadTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public CreateBatchLoadTaskResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public CreateBatchLoadTaskResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
