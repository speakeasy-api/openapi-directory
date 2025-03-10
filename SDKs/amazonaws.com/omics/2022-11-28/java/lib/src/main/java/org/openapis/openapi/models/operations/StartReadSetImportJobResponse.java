/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class StartReadSetImportJobResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public StartReadSetImportJobResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public StartReadSetImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public StartReadSetImportJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    /**
     * RequestTimeoutException
     */
    
    public Object requestTimeoutException;

    public StartReadSetImportJobResponse withRequestTimeoutException(Object requestTimeoutException) {
        this.requestTimeoutException = requestTimeoutException;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public StartReadSetImportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * ServiceQuotaExceededException
     */
    
    public Object serviceQuotaExceededException;

    public StartReadSetImportJobResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.StartReadSetImportJobResponse startReadSetImportJobResponse;

    public StartReadSetImportJobResponse withStartReadSetImportJobResponse(org.openapis.openapi.models.shared.StartReadSetImportJobResponse startReadSetImportJobResponse) {
        this.startReadSetImportJobResponse = startReadSetImportJobResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public StartReadSetImportJobResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public StartReadSetImportJobResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public StartReadSetImportJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public StartReadSetImportJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public StartReadSetImportJobResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
