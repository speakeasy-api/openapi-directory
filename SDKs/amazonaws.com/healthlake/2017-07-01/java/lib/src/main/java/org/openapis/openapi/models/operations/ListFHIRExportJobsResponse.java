/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListFHIRExportJobsResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public ListFHIRExportJobsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public ListFHIRExportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public ListFHIRExportJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.ListFHIRExportJobsResponse listFHIRExportJobsResponse;

    public ListFHIRExportJobsResponse withListFHIRExportJobsResponse(org.openapis.openapi.models.shared.ListFHIRExportJobsResponse listFHIRExportJobsResponse) {
        this.listFHIRExportJobsResponse = listFHIRExportJobsResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public ListFHIRExportJobsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public ListFHIRExportJobsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListFHIRExportJobsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public ListFHIRExportJobsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public ListFHIRExportJobsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public ListFHIRExportJobsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
