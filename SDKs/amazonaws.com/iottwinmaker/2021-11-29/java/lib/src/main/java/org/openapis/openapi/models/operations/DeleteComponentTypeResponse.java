/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DeleteComponentTypeResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public DeleteComponentTypeResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public DeleteComponentTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.DeleteComponentTypeResponse deleteComponentTypeResponse;

    public DeleteComponentTypeResponse withDeleteComponentTypeResponse(org.openapis.openapi.models.shared.DeleteComponentTypeResponse deleteComponentTypeResponse) {
        this.deleteComponentTypeResponse = deleteComponentTypeResponse;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public DeleteComponentTypeResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    
    public Integer statusCode;

    public DeleteComponentTypeResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DeleteComponentTypeResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public DeleteComponentTypeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public DeleteComponentTypeResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public DeleteComponentTypeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public DeleteComponentTypeResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
