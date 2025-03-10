/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PutStudioMembersResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public PutStudioMembersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    /**
     * ConflictException
     */
    
    public Object conflictException;

    public PutStudioMembersResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    
    
    public String contentType;

    public PutStudioMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServerErrorException
     */
    
    public Object internalServerErrorException;

    public PutStudioMembersResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    
    /**
     * Success
     */
    
    public java.util.Map<String, Object> putStudioMembersResponse;

    public PutStudioMembersResponse withPutStudioMembersResponse(java.util.Map<String, Object> putStudioMembersResponse) {
        this.putStudioMembersResponse = putStudioMembersResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public PutStudioMembersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public PutStudioMembersResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PutStudioMembersResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ServiceQuotaExceededException
     */
    
    public Object serviceQuotaExceededException;

    public PutStudioMembersResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public PutStudioMembersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public PutStudioMembersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public PutStudioMembersResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
