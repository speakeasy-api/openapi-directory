/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetSpaceResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public GetSpaceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    /**
     * ConflictException
     */
    
    public Object conflictException;

    public GetSpaceResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    
    
    public String contentType;

    public GetSpaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetSpaceResponse getSpaceResponse;

    public GetSpaceResponse withGetSpaceResponse(org.openapis.openapi.models.shared.GetSpaceResponse getSpaceResponse) {
        this.getSpaceResponse = getSpaceResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public GetSpaceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * ServiceQuotaExceededException
     */
    
    public Object serviceQuotaExceededException;

    public GetSpaceResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetSpaceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetSpaceResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public GetSpaceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public GetSpaceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public GetSpaceResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
