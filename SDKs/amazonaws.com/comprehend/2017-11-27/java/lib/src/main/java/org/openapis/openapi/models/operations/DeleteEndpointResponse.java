/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DeleteEndpointResponse {
    
    public String contentType;

    public DeleteEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public java.util.Map<String, Object> deleteEndpointResponse;

    public DeleteEndpointResponse withDeleteEndpointResponse(java.util.Map<String, Object> deleteEndpointResponse) {
        this.deleteEndpointResponse = deleteEndpointResponse;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public DeleteEndpointResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    /**
     * InvalidRequestException
     */
    
    public Object invalidRequestException;

    public DeleteEndpointResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public DeleteEndpointResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public DeleteEndpointResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DeleteEndpointResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceInUseException
     */
    
    public Object resourceInUseException;

    public DeleteEndpointResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    
    /**
     * TooManyRequestsException
     */
    
    public Object tooManyRequestsException;

    public DeleteEndpointResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    
    public DeleteEndpointResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
