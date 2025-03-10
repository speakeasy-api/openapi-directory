/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class StartFHIRImportJobResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public StartFHIRImportJobResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public StartFHIRImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public StartFHIRImportJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public StartFHIRImportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.StartFHIRImportJobResponse startFHIRImportJobResponse;

    public StartFHIRImportJobResponse withStartFHIRImportJobResponse(org.openapis.openapi.models.shared.StartFHIRImportJobResponse startFHIRImportJobResponse) {
        this.startFHIRImportJobResponse = startFHIRImportJobResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public StartFHIRImportJobResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public StartFHIRImportJobResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public StartFHIRImportJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public StartFHIRImportJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public StartFHIRImportJobResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
